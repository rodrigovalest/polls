<?php

namespace Database\Seeders;

use App\Models\Poll;
use Illuminate\Database\Seeder;

class PollSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Poll::create([
            'id' => 1,
            'title' => 'Qual é a sua cor favorita?',
            'start_date' => '2024-10-24 18:00:00',
            'end_date' => '2024-10-31 18:00:00',
        ]);

        Poll::create([
            'id' => 2,
            'title' => 'Qual é o seu esporte favorito?',
            'start_date' => '2024-10-20 18:00:00',
            'end_date' => '2024-12-25 18:00:00',
        ]);
    }
}