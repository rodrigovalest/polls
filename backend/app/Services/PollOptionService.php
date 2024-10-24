<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Poll;
use App\Models\PollOption;

class PollOptionService
{
    public function findAllByPollId($pollId): Collection
    {
        $poll = Poll::with('options')->findOrFail($pollId);
        return $poll->options;
    }

    public function create($idPoll, $description): void
    {
        PollOption::create([
            'id_poll' => $idPoll,
            'description' => $description,
            'vote_count' => 0
        ]);
    }
}
