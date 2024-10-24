<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PollOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_poll',
        'description',
        'vote_count',
    ];

    public function poll()
    {
        return $this->belongsTo(Poll::class, 'id_poll');
    }
}
