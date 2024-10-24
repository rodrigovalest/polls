<?php

namespace Database\Seeders;

use App\Models\PollOption;
use Illuminate\Database\Seeder;

class PollOptionSeeder extends Seeder
{
    public function run()
    {
        PollOption::create([
            'id_poll' => 1,
            'description' => 'Azul',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 1,
            'description' => 'Vermelho',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 1,
            'description' => 'Verde',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Futebol',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Basquete',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Vôlei',
            'vote_count' => 0,
        ]);
    }
}
