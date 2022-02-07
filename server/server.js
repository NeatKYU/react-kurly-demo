const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log(`Server is running.`);
});

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kyukurly",
  password: "postgres",
  port: 5432
});

// user register api
app.post("/api/user/register", (req, res) => {
  const { id, password, user_name, phone_number, address1, address2, birthday, gender  } = req.body;

	const enbcryptPW = bcrypt.hashSync(password, 10);

  pool.query("INSERT INTO user_info (id, password, user_name, phone_number, address1, address2, birthday, gender) VALUES($1, $2, $3, $4, $5, $6, $7, $8)", 
	[ id, enbcryptPW, user_name, phone_number, address1, address2, birthday, gender ],
	(error, results) => {
      if (error) {
        throw error;
      }
			console.log('user added!!')
			res.send({
				success: true,
				error: false,
			})
    }
  );
});

// 유저 로그인
// 1. 일단 아이디만 가지고 유저정보 검색함(유저아이디 중복없다는 가정하에)
// 2. 아이디가 있으면 bcrypt로 입력된 패스워드와 입력받은 유저의 비밀번호를 비교함(유저가 없을 경우 프론트에서 처리)
// 3. 같으면 로그인 성공 (error시 프론트에서 처리)
// 토큰은 나중에 처리....
app.post("/api/user/login", (req, res) => {
  // const { label, status, priority } = req.body;
	const {id, password} = req.body;

	const currentPW = bcrypt.hashSync(password, 10);
	// const same = bcrypt.compareSync(password, enbcryptPW);

  pool.query( "SELECT * FROM user_info WHERE id=$1", 
	[id],
	(error, results) => {
      if (error) {
        throw error;
      }
			if(results.rows[0]){ //아이디가 있으면
				const userInfo = results.rows[0];
				console.log(userInfo)
				const same = bcrypt.compare(currentPW, userInfo.password)
				if(same) { //비밀번호가 맞으면
					res.send({
						token: 'not yet',
						status: 'success',
					})
				} else { //비밀번호가 틀림
					res.send({ 
						status: 'password not same' 
					})
				}
			} else { //아이디틀림
				res.send({
					status: 'user id not exist'
				})
			}
    }
  );
});

// 마이 페이지 할때 사용 자기 정보 가지고있다가 보여줌~
app.get("/api/user/get", (req, res) => {
  // const { label, status, priority } = req.body;

  pool.query( "SELECT * FROM notice_user", (error, results) => {
      if (error) {
        throw error;
      }

      res.send(results.rows);
    }
  );
});

// app.get("/api/board/list/get/:page/:pageInterval", (req, res) => {
//   const page = req.params.page;
// 	const pageInterval = req.params.pageInterval;
// 	const calcPage = page * pageInterval;
// 	const calcPageInterval = calcPage - pageInterval;
// 	console.log(page, pageInterval, calcPage, calcPageInterval)
// 	const data = {
// 		"totalCount": 0,
// 		"rows": [
// 			{
// 				"seq": 0,
// 				"title": '',
// 				"contents": '',
// 			}
// 		]
// 	}

// 	pool.query("SELECT count(seq) FROM notice_board",
// 		(error, results) => {
// 			if(error) {
// 				throw error;
// 			}
// 			console.log(results.rows[0].count)
// 			data.totalCount = results.rows[0].count

// 			pool.query("select * " +
// 								 " from ( select ROW_NUMBER() over() as row, * " +
// 								 " from notice_board) as t " +
// 								 " where t.row <= $1 AND t.row > $2", 
// 			[calcPage, calcPageInterval],
// 			(error, results) => {
// 					if (error) {
// 						throw error;
// 					}
// 					data.rows = results.rows;
// 					console.log("data.rows.count", data)
// 					res.send(data);
// 				}
// 			);
// 		}
// 	)
// });


// app.post("/api/board/info/get/:seq", (req, res) => {
//   // const { label, status, priority } = req.body;
// 	const { seq } = req.params;

//   pool.query( "SELECT * FROM notice_board WHERE seq = $1", 
// 	[seq],
// 	(error, results) => {
//       if (error) {
//         throw error;
//       }
// 			console.log("check seq = ",seq)
// 			res.send(results.rows[0])
//     }
//   );
// });

// app.delete("/api/board/delete/:seq", (req, res) => {
//   // const { label, status, priority } = req.body;
// 	const { seq } = req.params;
// 	const data = {
// 		success: false,
// 		error: false,
// 	}

//   pool.query( "DELETE FROM notice_board WHERE seq = $1", 
// 	[seq],
// 	(error, results) => {
//       if (error) {
//         throw error;
//       }
// 			if(results.rowCount > 0){
// 				data.success = true;
// 			}
// 			console.log('delete notice id = ', seq)
// 			res.send(data)
//     }
//   );
// });

// app.post("/api/board/insert", (req, res) => {
//   const { title, contents } = req.body;

//   pool.query("INSERT INTO notice_board (title, contents) VALUES($1, $2)", 
// 	[title, contents],
// 	(error, results) => {
//       if (error) {
//         throw error;
//       }
// 			console.log('insert notice id = ')
// 			res.send({
// 				success: true,
// 				error: false,
// 			})
//     }
//   );
// });

// app.post("/api/board/update/:nid", (req, res) => {
// 	const { nid } = req.params;
//   const { title, contents } = req.body;

//   pool.query("update notice_board set title=$1, contents=$2 where seq = $3", 
// 	[title, contents, nid],
// 	(error, results) => {
//       if (error) {
//         throw error;
//       }
// 			console.log('update notice id = ', nid)
// 			res.send({
// 				success: true,
// 				error: false,
// 			})
//     }
//   );
// });

module.exports = app;