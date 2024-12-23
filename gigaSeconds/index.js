function gigasecond(startDate) {
    const GIGASECOND = 1000000000; // 1 gigasecond = 1,000,000,000 seconds
    const MILLISECONDS_IN_SECOND = 1000;

    // Convert gigaseconds to milliseconds
    const gigasecondInMilliseconds = GIGASECOND * MILLISECONDS_IN_SECOND;

    // Create a new Date object based on the original
    const resultDate = new Date(startDate.getTime() + gigasecondInMilliseconds);

    return resultDate;
}


gigasecond(new Date("2024-01-24T18:29:41.154Z")); // 2043-01-01T01:46:40.000Z