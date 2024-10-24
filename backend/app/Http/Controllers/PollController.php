<?php

namespace App\Http\Controllers;

use App\Services\PollService;
use App\Http\Requests\PollRequest;
use App\Http\Requests\VoteRequest;
use App\Http\Resources\PollResource;
use Illuminate\Http\JsonResponse;

class PollController extends Controller
{
    public function __construct(
        protected PollService $pollService,
    ) {}

    public function index()
    {
        $polls = $this->pollService->findAll();

        return response()->json([
            'message' => 'All polls fetched successfully',
            'data' => PollResource::collection($polls)
        ], 200);
    }

    public function store(PollRequest $request): JsonResponse
    {
        $this->pollService->create(
            $request->validated('title'),
            $request->validated('start_date'),
            $request->validated('end_date'),
            $request->validated('options')
        );

        return response()->json([
            'message' => 'Poll created successfully',
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $poll = $this->pollService->findById($id);

        return response()->json([
            'message' => 'Poll found successfully',
            'data' => new PollResource($poll)
        ], 200);
    }

    public function update(PollRequest $request, $id): JsonResponse
    {
        $this->pollService->update(
            $id,
            $request->validated('title'),
            $request->validated('start_date'),
            $request->validated('end_date'),
        );

        return response()->json([
            'message' => 'Poll updated successfully'
        ], 200);
    }

    public function destroy($id): JsonResponse
    {
        $this->pollService->deleteById($id);

        return response()->json([
            'message' => 'Poll deleted successfully'
        ], 204);
    }

    public function vote(VoteRequest $request, $id): JsonResponse
    {
        $this->pollService->vote(
            $id,
            $request->validated('option'),
        );

        return response()->json([
            'message' => 'Vote registered successfully'
        ], 200);
    }
}
