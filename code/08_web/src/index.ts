import { User } from "./models/User";

const user = new User({ name: "New User", age: 0 });

user.sync.save();
