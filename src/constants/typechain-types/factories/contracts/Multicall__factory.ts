/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Multicall, MulticallInterface } from "../../contracts/Multicall";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063252dba4214610030575b600080fd5b61004a600480360381019061004591906104c8565b610061565b604051610058929190610674565b60405180910390f35b60006060439150825167ffffffffffffffff811115610083576100826101de565b5b6040519080825280602002602001820160405280156100b657816020015b60608152602001906001900390816100a15790505b50905060005b83518110156101ae576000808583815181106100db576100da6106a4565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168684815181106101105761010f6106a4565b5b602002602001015160200151604051610129919061070f565b6000604051808303816000865af19150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50915091508161017a57600080fd5b8084848151811061018e5761018d6106a4565b5b6020026020010181905250505080806101a690610755565b9150506100bc565b50915091565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610216826101cd565b810181811067ffffffffffffffff82111715610235576102346101de565b5b80604052505050565b60006102486101b4565b9050610254828261020d565b919050565b600067ffffffffffffffff821115610274576102736101de565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102bf82610294565b9050919050565b6102cf816102b4565b81146102da57600080fd5b50565b6000813590506102ec816102c6565b92915050565b600080fd5b600067ffffffffffffffff821115610312576103116101de565b5b61031b826101cd565b9050602081019050919050565b82818337600083830152505050565b600061034a610345846102f7565b61023e565b905082815260208101848484011115610366576103656102f2565b5b610371848285610328565b509392505050565b600082601f83011261038e5761038d6101c8565b5b813561039e848260208601610337565b91505092915050565b6000604082840312156103bd576103bc61028a565b5b6103c7604061023e565b905060006103d7848285016102dd565b600083015250602082013567ffffffffffffffff8111156103fb576103fa61028f565b5b61040784828501610379565b60208301525092915050565b600061042661042184610259565b61023e565b9050808382526020820190506020840283018581111561044957610448610285565b5b835b8181101561049057803567ffffffffffffffff81111561046e5761046d6101c8565b5b80860161047b89826103a7565b8552602085019450505060208101905061044b565b5050509392505050565b600082601f8301126104af576104ae6101c8565b5b81356104bf848260208601610413565b91505092915050565b6000602082840312156104de576104dd6101be565b5b600082013567ffffffffffffffff8111156104fc576104fb6101c3565b5b6105088482850161049a565b91505092915050565b6000819050919050565b61052481610511565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610590578082015181840152602081019050610575565b8381111561059f576000848401525b50505050565b60006105b082610556565b6105ba8185610561565b93506105ca818560208601610572565b6105d3816101cd565b840191505092915050565b60006105ea83836105a5565b905092915050565b6000602082019050919050565b600061060a8261052a565b6106148185610535565b93508360208202850161062685610546565b8060005b85811015610662578484038952815161064385826105de565b945061064e836105f2565b925060208a0199505060018101905061062a565b50829750879550505050505092915050565b6000604082019050610689600083018561051b565b818103602083015261069b81846105ff565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b60006106e982610556565b6106f381856106d3565b9350610703818560208601610572565b80840191505092915050565b600061071b82846106de565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061076082610511565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561079357610792610726565b5b60018201905091905056fea2646970667358221220547ca0a820511196c68b9d840e1c7d7a9fbc6ab1a706ebd5420396ebc958285e64736f6c63430008090033";

type MulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall__factory extends ContractFactory {
  constructor(...args: MulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  override connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new utils.Interface(_abi) as MulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}
