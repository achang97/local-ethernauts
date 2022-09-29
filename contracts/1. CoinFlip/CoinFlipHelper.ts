import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  const [owner] = await ethers.getSigners();
  for (let i = 0; i < 10; i++) {
    await attacker.connect(owner).hackContract();
  }
};

export default helper;
