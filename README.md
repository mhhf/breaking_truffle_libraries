## Breaking truffle library tests.
### System stats:
```
OS X 10.10.5 (14F1605)
testrpc 2.0.1 - d5efa9a
node v5.8.0
solc 0.3.1-c492d9be
```
### Usage
```
truffle compile
truffle deploy
truffle test
```

Expected to pass all tests (tested successfully on morden with `geth`)
Observed error with testrpc:
```
Using environment test.
Compiling contracts...


  Contract: X
    ✓ should return true for reference contract
    1) should call library and return true
    > No events were emitted


  1 passing (1s)
  1 failing

  1) Contract: X should call library and return true:
     Error: Error: VM Exception while executing eth_call: invalid JUMP
    at /Users/mhhf/work/eth/testrpc/node_modules/web3-provider-engine/subproviders/vm.js:127:17
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/runTx.js:55:5
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:726:13
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:52:16
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:269:32
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:44:16
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:723:17
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:167:37
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/runTx.js:51:9
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/cache.js:137:7
      at Object.module.exports.InvalidResponse (/usr/local/lib/node_modules/truffle/node_modules/web3/lib/web3/errors.js:35:16)
      at /usr/local/lib/node_modules/truffle/node_modules/web3/lib/web3/requestmanager.js:86:36
      at [object Object].request.onreadystatechange (/usr/local/lib/node_modules/truffle/node_modules/web3/lib/web3/httpprovider.js:114:13)
      at [object Object].dispatchEvent (/usr/local/lib/node_modules/truffle/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:591:25)
      at setState (/usr/local/lib/node_modules/truffle/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:610:14)
      at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:447:13)
      at endReadableNT (_stream_readable.js:913:12)
      at Function.module.exports.loopWhile (/usr/local/lib/node_modules/truffle/node_modules/deasync/index.js:63:10)
      at /usr/local/lib/node_modules/truffle/node_modules/deasync/index.js:36:18
      at runTask (/usr/local/lib/node_modules/truffle/cli.js:46:12)
      at Object.<anonymous> (/usr/local/lib/node_modules/truffle/cli.js:331:14)
      at node.js:933:3
```

