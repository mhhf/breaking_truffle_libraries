contract('X', function(accounts) {
  it("should return true for reference contract", function(done) {
    var x = X.deployed();

    x.testTrue.call().then(function(value) {
      assert.equal(value, true, "expect return a true");
    }).then(done).catch(done);
  });

  it("should call library and return true", function(done) {
    var a = A.deployed();

    a.testTrue.call().then(function(value) {
      assert.equal(value, true, "expect return a true");
    }).then(done).catch(done);
  });
});
