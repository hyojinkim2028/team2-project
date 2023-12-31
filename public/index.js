// 댓글 로딩

async function getComment() {
  try {
    const res = await axios.get("/comments");
    const comments = res.data;
    console.log(comments);
    const tbody = document.querySelector("#comment-list tbody");
    tbody.innerHTML = "";
    comments.map(function (comment) {
      const row = document.createElement("tr");

      // 로우 셀 추가
      td = document.createElement("td");
      td.textContent = comment.name;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = comment.comment;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = comment.createdAt;
      row.appendChild(td);
      tbody.appendChild(row);

      // 댓글 수정
      const edit = document.createElement("button");
      edit.textContent = "수정";
      edit.addEventListener("click", async () => {
        // 수정 클릭 시
        const password = prompt("비밀번호를 입력하세요");
        if (Number(password) == comment.password) {
          const newComment = prompt("바꿀 내용을 입력하세요");
          if (!newComment) {
            return alert("내용을 반드시 입력하셔야 합니다");
          }
          try {
            await axios.patch(`/comments/${comment._id}`, {
              comment: newComment,
            });
            getComment(comment._id);
          } catch (err) {
            console.error(err);
          }
        } else {
          alert("비밀번호가 틀렸습니다. 다시 시도하세요");
        }
      });

      //댓글 삭제
      const remove = document.createElement("button");
      remove.textContent = "삭제";
      remove.addEventListener("click", async () => {
        const password = prompt("비밀번호를 입력하세요");
        if (Number(password) == comment.password) {
          // 삭제 클릭 시
          try {
            await axios.delete(`/comments/${comment._id}`);
            getComment(comment._id);
          } catch (err) {
            console.error(err);
          }
        } else {
          return alert("비밀번호가 틀렸습니다. 다시 시도하세요");
        }
      });

      // 버튼 추가
      td = document.createElement("td");
      td.appendChild(edit);
      row.appendChild(td);
      td = document.createElement("td");
      td.appendChild(remove);
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

getComment(); // 웹사이트 들어왔을 때 댓글 로딩

// 댓글 등록 시
document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const comment = e.target.comment.value;
    const password = e.target.password.value;

    if (!name) {
      return alert("이름을 입력하세요");
    }

    if (!comment) {
      return alert("댓글을 입력하세요");
    }
    if (!password) {
      return alert("비밀번호를 입력하세요");
    }
    try {
      await axios.post("/comments", { name, comment, password });
      getComment();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = "";
    e.target.comment.value = "";
    e.target.password.value = "";
  });

// 관리자 기능
document.getElementById("manager").addEventListener("click", function () {
  const mPassword = prompt("관리자 비밀번호를 입력하세요");
  if (mPassword == "20230805") {
    async function getComment() {
      try {
        const res = await axios.get("/comments");
        const comments = res.data;
        console.log(comments);
        const tbody = document.querySelector("#comment-list tbody");
        tbody.innerHTML = "";
        comments.map(function (comment) {
          const row = document.createElement("tr");

          // 로우 셀 추가
          td = document.createElement("td");
          td.textContent = comment.name;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = comment.comment;
          row.appendChild(td);
          td = document.createElement("td");
          td.textContent = comment.createdAt;
          row.appendChild(td);
          tbody.appendChild(row);

          // 댓글 수정
          const edit = document.createElement("button");
          edit.textContent = "수정";
          edit.addEventListener("click", async () => {
            // 수정 클릭 시
            const password = prompt("비밀번호를 입력하세요");
            if (Number(password) === comment.password) {
              const newComment = prompt("바꿀 내용을 입력하세요");
              if (!newComment) {
                return alert("내용을 반드시 입력하셔야 합니다");
              }
              try {
                await axios.patch(`/comments/${comment._id}`, {
                  comment: newComment,
                });
                getComment(comment._id);
              } catch (err) {
                console.error(err);
              }
            } else {
              return alert("비밀번호가 틀렸습니다. 다시 시도하세요");
            }
          });

          //댓글 삭제
          const remove = document.createElement("button");
          remove.textContent = "삭제";
          remove.addEventListener("click", async () => {
            // 삭제 클릭 시
            try {
              await axios.delete(`/comments/${comment._id}`);
              getComment(comment._id);
            } catch (err) {
              console.error(err);
            }
          });

          // 버튼 추가
          td = document.createElement("td");
          td.appendChild(edit);
          row.appendChild(td);
          td = document.createElement("td");
          td.appendChild(remove);
          row.appendChild(td);
          tbody.appendChild(row);
        });
      } catch (err) {
        console.error(err);
      }
    }

    getComment(); // 웹사이트 들어왔을 때 댓글 로딩

    // 댓글 등록 시
    document
      .getElementById("comment-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = e.target.username.value;
        const comment = e.target.comment.value;
        const password = e.target.password.value;

        if (!name) {
          return alert("이름을 입력하세요");
        }

        if (!comment) {
          return alert("댓글을 입력하세요");
        }
        if (!password) {
          return alert("비밀번호를 입력하세요");
        }
        try {
          await axios.post("/comments", { name, comment, password });
          getComment();
        } catch (err) {
          console.error(err);
        }
        e.target.username.value = "";
        e.target.comment.value = "";
        e.target.password.value = "";
      });
  } else {
    return alert("비밀번호 오류. 다시 시도하세요");
  }
});
