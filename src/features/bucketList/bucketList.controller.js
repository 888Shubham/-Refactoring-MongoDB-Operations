import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {
  constructor(){
    this.bucketListRepository = new BucketListRepository();
  }
  add = async (req, res) => {
    // const itemToCreate = new BucketListModel()
    const { title, description, dateAdded, targetDate, isCompleted } = req.body;
    const itemToCreate = new BucketListModel(title,
      description,
      dateAdded,
      targetDate,
      isCompleted);
      const item = await this.bucketListRepository.addBucketListItem(itemToCreate);

    // // Refactor to use the repository method
    // // const item = await BucketListModel.addBucketListItem(
    //  itemToCreate (
    //   title,
    //   description,
    //   dateAdded,
    //   targetDate,
    //   isCompleted
    // );
    // await 

    res.status(201).send(item);
  };

  get = async (req, res) => {
    const { title } = req.query;
    console.log("title:", title);

    const item = await this.bucketListRepository.findOneBucketListItem(title);

    // Refactor to use the repository method
    // const item = await BucketListModel.findOneBucketListItem(title);

    if (!item) {
      res.status(200).send("Item not found.");
    } else {
      res.status(200).send(item);
    }
  };
}
