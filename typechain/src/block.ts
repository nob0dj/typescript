// typescript import statement
import * as CryptoJS from 'crypto-js'

class Block {
  public index: number
  public hash: string
  public prevHash: string
  public data: string
  public timestamp: number

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number,
  ){
    this.index = index
    this.hash = hash
    this.prevHash = prevHash
    this.data = data
    this.timestamp = timestamp
  }

  /**
   * 추가하고자 하는 Block의 유효성 테스트
   */
  static validateStrucure = (candidateBlock : Block) : boolean => 
    typeof candidateBlock.index === "number" &&
    typeof candidateBlock.hash === "string" &&
    typeof candidateBlock.prevHash === "string" &&
    typeof candidateBlock.data === "string" &&
    typeof candidateBlock.timestamp === "number" &&
    Block.calculateBlockHash(candidateBlock.index, candidateBlock.prevHash, candidateBlock.data, candidateBlock.timestamp) === candidateBlock.hash

  static calculateBlockHash = (
    index: number, 
    prevHash: string, 
    data: string, 
    timestamp: number
  ): string => CryptoJS.SHA256(index + prevHash + data + timestamp).toString()


}

const genesisBlock: Block = new Block(0, "627d3d4ee5bbb79ef4253d9c3c9236982a3419833c8a4091aa17c67ed2b81be6", "bc4bca0ee026799e8c32537725410b961bd7b617a4faa31f5976de611a3d400b", "Hello", Date.now())

let blockChain: [Block] = [genesisBlock]
// Block 외의 타입은 추가할 수 없다.
// blockChain.push("abcde")


// console.log(blockChain) 

// static method test 객체 생성하지 않고 사용가능
// let hash = Block.calculateBlockHash(genesisBlock.index, genesisBlock.prevHash, genesisBlock.data, genesisBlock.timestamp)
// console.log(hash)

const getLatestBlock = (): Block => blockChain[blockChain.length-1]

const createNewBlock = (data: string): Block => {
  const prevBlock : Block = getLatestBlock()
  const nextIndex : number = prevBlock.index + 1
  const prevHash : string = prevBlock.hash
  const nextTimestamp : number = Date.now()
  const nextHash : string = Block.calculateBlockHash(nextIndex, prevHash, data, nextTimestamp)
  
  return new Block(nextIndex, nextHash, prevHash, data, nextTimestamp)
}

// 추가 테스트
// blockChain.push(createNewBlock("world"))
// console.log(blockChain)


/**
 * 추가하고자 하는 block의 유효성검사
 * 
 * static validate 메소드를 사용한다.
 * 
 * @param candidateBlock 
 * @param prevBlock 
 */
const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean => 
  candidateBlock.index === prevBlock.index + 1 &&
  candidateBlock.prevHash === prevBlock.hash &&
  Block.validateStrucure(candidateBlock)

const addNewBlockToBlockChain = (candidateBlock: Block): void => {
  if(isBlockValid(candidateBlock, getLatestBlock()) === true)
    blockChain.push(candidateBlock)
  }


const addBlock = (data: string): void => {
  const candidateBlock = createNewBlock(data)
  addNewBlockToBlockChain(candidateBlock)
}

addBlock("typescript")
addBlock("hello nomad")

console.log(blockChain)

  



