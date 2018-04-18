test("First test", () => {
    // WORKSHOP_START
    throw new Error("Panic!");
    // WORKSHOP_END
    // FINAL_START
    expect(true).toBe(true);
    // FINAL_END
});