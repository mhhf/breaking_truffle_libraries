// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"testTrue","outputs":[{"name":"","type":"bool"}],"type":"function"}],
    binary: "606060405260268060106000396000f3606060405260e060020a60003504634e4fb1fa8114601a575b005b60016060908152602090f3",
    unlinked_binary: "606060405260268060106000396000f3606060405260e060020a60003504634e4fb1fa8114601a575b005b60016060908152602090f3",
    address: "0xcc7c5784f9690842a753c58a4d92f319dbe1c19e",
    generated_with: "2.0.6",
    contract_name: "X"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("X error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("X error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("X error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("X error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.X = Contract;
  }

})();
