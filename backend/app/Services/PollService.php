<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Poll;

class PollService
{
    public function create($title, $startDate, $endDate): Poll
    {
        return Poll::create([
            'title' => $title,
            'start_date' => $startDate,
            'end_date' => $endDate,
        ]);
    }

    public function findAll(): Collection
    {
        return Poll::all();
    }

    public function findById($id): Poll
    {
        return Poll::findOrFail($id);
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
