import { writable } from "svelte/store";
import fms_user from "./assets/img/fms_user.png";
import shirt_user from "./assets/img/shirt_user.png";
import hood_user from "./assets/img/hood_user.png";
import fml_user from "./assets/img/fml_user.png";


export const count = writable(0)

export let user_from_store = writable([
    {
        id: 1,
        name: "Manager_1",
        mail: "manager_1@m.co",
        img: fml_user,
        active: true,
      },
      {
        id: 2,
        name: "Hr",
        mail: "humanresource@m.co",
        img: shirt_user,
        active: true,
      },
      {
        id: 3,
        name: "Developer_1",
        mail: "developer_1@m.co",
        img: fms_user,
        active: true,
      },
      {
        id: 4,
        name: "Developer_2",
        mail: "developer_2@m.co",
        img: hood_user,
        active: false,
      },
])

export const remove = (e) => {
    const { detail } = e;
    user_from_store.update((val) => val.filter((user) => user.id !== detail)) 
};
export const addUser = (e) => {
    const { detail } = e;
    // ****** notice this when updating an array use destructure and assign to get reactivity
    user_from_store.update((val) => [
        {
            id: val.length + 1,
            img: fml_user,
            ...detail,
        },
        ...val,
        ])
    console.log(detail);
};