// Please don't change the pre-written code
// Import the necessary modules here
import { getDB } from "../../config/mongodb";

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    const db = getDB();
    await db.collection("bucketListItems").insertOne(bucketListItem);
    return bucketListItem;

  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDB();
    // console.log("title:", title);
    const item = await db.collection("bucketListItems").findOne({ title });
    return item;
  }
}

export default BucketListRepository;
