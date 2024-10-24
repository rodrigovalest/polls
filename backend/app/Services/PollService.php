<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Poll;
use App\Services\PollOptionService;
use App\Exceptions\PollExpiredException;
use App\Exceptions\PollOptionNotFoundException;
use App\Exceptions\PollOptionsLimitException;

class PollService
{
    public function __construct(
        protected PollOptionService $pollOptionService
    ) {}

    public function create($title, $startDate, $endDate, array $pollOptions): void
    {
        if (count($pollOptions) < 3)
            throw new PollOptionsLimitException('A poll must have a minimum of 3 options.', 422);

        $poll = Poll::create([
            'title' => $title,
            'start_date' => $startDate,
            'end_date' => $endDate,
        ]);

        foreach ($pollOptions as $option) {
            $poll->options()->create([
                'description' => $option['description'],
            ]);
        }
    }

    public function findAll(): Collection
    {
        return Poll::with('options')->get();
    }

    public function findById($id): Poll
    {
        return Poll::with('options')->findOrFail($id);
    }

    public function update($id, $newTitle, $newStartDate, $newEndDate): void
    {
        $poll = Poll::findOrFail($id);

        $poll->update([
            'title' => $newTitle,
            'start_date' => $newStartDate,
            'end_date' => $newEndDate
        ]);
    }

    public function deleteById($id): void
    {
        $poll = Poll::findOrFail($id);
        $poll->delete();
    }

    public function vote($id, $option): void
    {
        $poll = Poll::with('options')->findOrFail($id);

        $now = now();
        if ($now->lessThan($poll->start_date) || $now->greaterThan($poll->end_date))
            throw new PollExpiredException('The poll is not active. Voting is not allowed.', 403);

        $pollOption = $poll->options()->where('description', $option)->first();

        if (!$pollOption)
            throw new PollOptionNotFoundException('Poll option was not found.', 404);

        $pollOption->increment('vote_count');
    }
}
