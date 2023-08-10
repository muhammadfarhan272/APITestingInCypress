import { MainTestCase } from "../../MainPage/WritingPOST/MainTestCases.po";
import { ThreeWaysOfPost } from "../../MainPage/WritingPOST/ThreeWaysOfWritingPOST.po";
import { generateRandomEmail, generateRandomTitle, generateRandomUserId } from "../utility/utilities";
let MainTest: MainTestCase;
let WaysOfPost: ThreeWaysOfPost;
describe('API Request Test', () => {
  MainTest = new MainTestCase();
  WaysOfPost = new ThreeWaysOfPost();
  it('should make a GET request to an API endpoint', () => {
    MainTest.PostMethod();
  });
  it('Post call', () => {
    MainTest.PostMethod();
  });
  it('PUT call', () => {
    MainTest.PutMethod();
  });
  it('Delete call', () => {
    MainTest.DeleteMethod();
  });
  it('Post call for Hard coded json object ', () => {
    WaysOfPost.FirstWaysOfPost();
  });
  it('Post call for Dynamically generating json object ', () => {
    WaysOfPost.SecondWayOfPost();
  });
  it('Post call using Fixture  ', () => {
    WaysOfPost.ThirdWayOfPost();
  });
});

