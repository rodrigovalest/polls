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
            'title' => 'Qual é a sua cor favorita?',
            'start_date' => '2024-10-24 18:00:00',
            'end_date' => '2024-10-31 18:00:00',
        ]);

        Poll::create([
            'title' => 'Qual é o seu esporte favorito?',
            'start_date' => '2024-10-25 18:00:00',
            'end_date' => '2024-11-01 18:00:00',
        ]);
    }
}
