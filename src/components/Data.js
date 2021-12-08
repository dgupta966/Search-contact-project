import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";

function Data() {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("https://fortnite-api.theapinetwork.com/store/get")
      .then((res) => {
        console.log(res.data.data[0].item.name);
        console.log(res.data.data);
        setPosts1(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // https://fortnite-api.theapinetwork.com/store/get
  // {
  //   posts1.map((e) => {
  //     console.log(e.item.name);
  //   });
  // }
  return (
    <div className="data">
      <div className="search">
        <input
          type="text"
          placeholder="Search Contact"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {/* {posts1.data[0].item.name} */}
      <div>
        {/* <Image
          src="https://dropin-bucket.mativecdn.com/cosmetics/br/cid_539_athena_commando_f_streetgothcandy/icon.png"
          height="25px"
          width="25px"
          roundedCircle
          style={{
            borderRadius: "50%",
            backgroundColor: "#80808026",
            marginTop: "5px"
          }}
        /> */}
      </div>

      {/* <ul>
        {posts
          .filter((post) => {
            if (search == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul> */}
      <div>
        {posts1
          ?.filter((post) => {
            if (search == "") {
              return post;
            } else if (
              post.item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((e) => {
            return (
              <>
                <li>
                  <Image
                    src={e.item.images.background}
                    height="25px"
                    width="25px"
                    roundedCircle
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#80808026",
                      marginTop: "20px",
                      marginRight: "4px"
                    }}
                  />
                  <div style={{ marginLeft: "50px", marginTop: "-30px" }}>
                    <span style={{ fontSize: "13px" }}>
                      <strong>{e.item.name}</strong>
                    </span>
                    <br />
                    <span style={{ fontSize: "10px" }}>0123456789 </span>
                  </div>
                </li>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Data;
