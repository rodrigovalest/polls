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
            'id_poll' => 1,
            'description' => 'Amarelo',
            'vote_count' => 0,
        ]);


        PollOption::create([
            'id_poll' => 2,
            'description' => 'Cachorro',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Gato',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Pássaro',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 2,
            'description' => 'Peixe',
            'vote_count' => 0,
        ]);


        PollOption::create([
            'id_poll' => 3,
            'description' => 'Primavera',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 3,
            'description' => 'Verão',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 3,
            'description' => 'Outono',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 3,
            'description' => 'Inverno',
            'vote_count' => 0,
        ]);


        PollOption::create([
            'id_poll' => 4,
            'description' => 'Futebol',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 4,
            'description' => 'Basquete',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 4,
            'description' => 'Tênis',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 4,
            'description' => 'Natação',
            'vote_count' => 0,
        ]);


        PollOption::create([
            'id_poll' => 5,
            'description' => 'Rock',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 5,
            'description' => 'Pop',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 5,
            'description' => 'Jazz',
            'vote_count' => 0,
        ]);

        PollOption::create([
            'id_poll' => 5,
            'description' => 'Clássico',
            'vote_count' => 0,
        ]);
    }
}
