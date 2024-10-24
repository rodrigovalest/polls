<?php

namespace App\Http\Controllers;

use App\Exceptions\TempException;
use App\Services\PollService;
use App\Http\Requests\PollRequest;
use Illuminate\Http\JsonResponse;

class PollController extends Controller
{
    public function __construct(
        protected PollService $pollService,
    ) {}

    public function index(): JsonResponse
    {
        $polls = $this->pollService->findAll();

        return response()->json([
            'message' => 'All polls fetched successfully',
            'data' => $polls
        ], 200);
    }

    public function store(PollRequest $request): JsonResponse
    {
        $poll = $this->pollService->create(
            $request->validated('title'),
            $request->validated('start_date'),
            $request->validated('end_date'),
        );

        return response()->json([
            'message' => 'Poll created successfully',
            'data' => $poll
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $poll = $this->pollService->findById($id);

        return response()->json([
            'message' => 'Poll found successfully',
            'data' => $poll
        ], 200);
    }

    public function update(PollRequest $request, $id): JsonResponse
    {
        $poll = $this->pollService->update(
            $id,
            $request->validated('title'),
            $request->validated('start_date'),
            $request->validated('end_date')
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
}
