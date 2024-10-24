<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Poll;
use App\Services\PollOptionService;

class PollService
{
    public function __construct(
        protected PollOptionService $pollOptionService
    ) {}

    public function create($title, $startDate, $endDate, array $pollOptions): void
    {
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

    public function vote($pollId, $optionId): void
    {
    }
}
