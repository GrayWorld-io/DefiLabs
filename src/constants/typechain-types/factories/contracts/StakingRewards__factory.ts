/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingRewards,
  StakingRewardsInterface,
} from "../../contracts/StakingRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006003556301e1338060045560006005553480156200002357600080fd5b5060405162001ac338038062001ac3833981810160405281019062000049919062000229565b620000696200005d620000f360201b60201c565b620000fb60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000270565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f182620001c4565b9050919050565b6200020381620001e4565b81146200020f57600080fd5b50565b6000815190506200022381620001f8565b92915050565b60008060408385031215620002435762000242620001bf565b5b6000620002538582860162000212565b9250506020620002668582860162000212565b9150509250929050565b61184380620002806000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80637b0a47ee116100b8578063c8f33c911161007c578063c8f33c9114610317578063cd3daf9d14610335578063d1af0c7d14610353578063df136d6514610371578063ebe2b12b1461038f578063f2fde38b146103ad57610136565b80637b0a47ee1461027157806380faa57d1461028f5780638b876347146102ad5780638da5cb5b146102dd578063a694fc3a146102fb57610136565b80633c6b16ab116100ff5780633c6b16ab146101f35780633d18b9121461020f57806370a0823114610219578063715018a61461024957806372f702f31461025357610136565b80628cc2621461013b5780630700037d1461016b57806318160ddd1461019b5780632e1a7d4d146101b9578063386a9525146101d5575b600080fd5b610155600480360381019061015091906111e2565b6103c9565b6040516101629190611228565b60405180910390f35b610185600480360381019061018091906111e2565b6104cb565b6040516101929190611228565b60405180910390f35b6101a36104e3565b6040516101b09190611228565b60405180910390f35b6101d360048036038101906101ce919061126f565b6104ed565b005b6101dd610737565b6040516101ea9190611228565b60405180910390f35b61020d6004803603810190610208919061126f565b61073d565b005b6102176109b3565b005b610233600480360381019061022e91906111e2565b610bde565b6040516102409190611228565b60405180910390f35b610251610c27565b005b61025b610c3b565b60405161026891906112fb565b60405180910390f35b610279610c61565b6040516102869190611228565b60405180910390f35b610297610c67565b6040516102a49190611228565b60405180910390f35b6102c760048036038101906102c291906111e2565b610c81565b6040516102d49190611228565b60405180910390f35b6102e5610c99565b6040516102f29190611325565b60405180910390f35b6103156004803603810190610310919061126f565b610cc2565b005b61031f610f0e565b60405161032c9190611228565b60405180910390f35b61033d610f14565b60405161034a9190611228565b60405180910390f35b61035b610f7f565b60405161036891906112fb565b60405180910390f35b610379610fa5565b6040516103869190611228565b60405180910390f35b610397610fab565b6040516103a49190611228565b60405180910390f35b6103c760048036038101906103c291906111e2565b610fb1565b005b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054670de0b6b3a7640000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461045c610f14565b610466919061136f565b600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104b091906113a3565b6104ba919061142c565b6104c4919061145d565b9050919050565b60096020528060005260406000206000915090505481565b6000600a54905090565b336104f6610f14565b600781905550610504610c67565b600681905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d157610547816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b90611510565b60405180910390fd5b81600a6000828254610626919061136f565b9250508190555081600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461067c919061136f565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016106e0929190611530565b602060405180830381600087803b1580156106fa57600080fd5b505af115801561070e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107329190611591565b505050565b60045481565b610745611035565b600061074f610f14565b60078190555061075d610c67565b600681905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082a576107a0816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600554421061084c5760045482610841919061142c565b600381905550610892565b60004260055461085c919061136f565b905060006003548261086e91906113a3565b90506004548161087e919061142c565b84610889919061145d565b60038190555050505b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108ef9190611325565b60206040518083038186803b15801561090757600080fd5b505afa15801561091b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093f91906115d3565b90506004548161094f919061142c565b6003541115610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098a9061164c565b60405180910390fd5b42600681905550600454426109a8919061145d565b600581905550505050565b336109bc610f14565b6007819055506109ca610c67565b600681905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a9757610a0d816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115610bda576000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610b86929190611530565b602060405180830381600087803b158015610ba057600080fd5b505af1158015610bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd89190611591565b505b5050565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610c2f611035565b610c3960006110b3565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b60006005544210610c7a57600554610c7c565b425b905090565b60086020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33610ccb610f14565b600781905550610cd9610c67565b600681905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610da657610d1c816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610de9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de0906116b8565b60405180910390fd5b81600a6000828254610dfb919061145d565b9250508190555081600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e51919061145d565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610eb7939291906116d8565b602060405180830381600087803b158015610ed157600080fd5b505af1158015610ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f099190611591565b505050565b60065481565b600080600a541415610f2a576007549050610f7c565b600a54670de0b6b3a7640000600654610f41610c67565b610f4b919061136f565b600354610f5891906113a3565b610f6291906113a3565b610f6c919061142c565b600754610f79919061145d565b90505b90565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60055481565b610fb9611035565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102090611781565b60405180910390fd5b611032816110b3565b50565b61103d611177565b73ffffffffffffffffffffffffffffffffffffffff1661105b610c99565b73ffffffffffffffffffffffffffffffffffffffff16146110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a8906117ed565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111af82611184565b9050919050565b6111bf816111a4565b81146111ca57600080fd5b50565b6000813590506111dc816111b6565b92915050565b6000602082840312156111f8576111f761117f565b5b6000611206848285016111cd565b91505092915050565b6000819050919050565b6112228161120f565b82525050565b600060208201905061123d6000830184611219565b92915050565b61124c8161120f565b811461125757600080fd5b50565b60008135905061126981611243565b92915050565b6000602082840312156112855761128461117f565b5b60006112938482850161125a565b91505092915050565b6000819050919050565b60006112c16112bc6112b784611184565b61129c565b611184565b9050919050565b60006112d3826112a6565b9050919050565b60006112e5826112c8565b9050919050565b6112f5816112da565b82525050565b600060208201905061131060008301846112ec565b92915050565b61131f816111a4565b82525050565b600060208201905061133a6000830184611316565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061137a8261120f565b91506113858361120f565b92508282101561139857611397611340565b5b828203905092915050565b60006113ae8261120f565b91506113b98361120f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113f2576113f1611340565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006114378261120f565b91506114428361120f565b925082611452576114516113fd565b5b828204905092915050565b60006114688261120f565b91506114738361120f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114a8576114a7611340565b5b828201905092915050565b600082825260208201905092915050565b7f43616e6e6f742077697468647261772030000000000000000000000000000000600082015250565b60006114fa6011836114b3565b9150611505826114c4565b602082019050919050565b60006020820190508181036000830152611529816114ed565b9050919050565b60006040820190506115456000830185611316565b6115526020830184611219565b9392505050565b60008115159050919050565b61156e81611559565b811461157957600080fd5b50565b60008151905061158b81611565565b92915050565b6000602082840312156115a7576115a661117f565b5b60006115b58482850161157c565b91505092915050565b6000815190506115cd81611243565b92915050565b6000602082840312156115e9576115e861117f565b5b60006115f7848285016115be565b91505092915050565b7f50726f76696465642072657761726420746f6f20686967680000000000000000600082015250565b60006116366018836114b3565b915061164182611600565b602082019050919050565b6000602082019050818103600083015261166581611629565b9050919050565b7f43616e6e6f74207374616b652030000000000000000000000000000000000000600082015250565b60006116a2600e836114b3565b91506116ad8261166c565b602082019050919050565b600060208201905081810360008301526116d181611695565b9050919050565b60006060820190506116ed6000830186611316565b6116fa6020830185611316565b6117076040830184611219565b949350505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061176b6026836114b3565b91506117768261170f565b604082019050919050565b6000602082019050818103600083015261179a8161175e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117d76020836114b3565b91506117e2826117a1565b602082019050919050565b60006020820190508181036000830152611806816117ca565b905091905056fea2646970667358221220b1bca31dbec0936306ffdd82a175c34598353ec5b86100492c090604de3aa9e464736f6c63430008090033";

type StakingRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingRewards__factory extends ContractFactory {
  constructor(...args: StakingRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingRewards> {
    return super.deploy(
      _rewardsToken,
      _stakingToken,
      overrides || {}
    ) as Promise<StakingRewards>;
  }
  override getDeployTransaction(
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsToken,
      _stakingToken,
      overrides || {}
    );
  }
  override attach(address: string): StakingRewards {
    return super.attach(address) as StakingRewards;
  }
  override connect(signer: Signer): StakingRewards__factory {
    return super.connect(signer) as StakingRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsInterface {
    return new utils.Interface(_abi) as StakingRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewards {
    return new Contract(address, _abi, signerOrProvider) as StakingRewards;
  }
}
