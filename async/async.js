// WIP

// const async = {
//   sequence: (arr) => {
//
//
//     return (cb) => {
//       cb(err, data)
//     }
//   }
// }
//
//
// var getUser = function(userId) {
//   return function(cb) {
//     setTimeout(function() {
//       cb(null, {userId: userId, name: 'Joe'});
//     }, Math.random() * 100);
//   };
// };
//
// var upperCaseName = function(cb, user) {
//   cb(null, user.name.toUpperCase());
// };
//
// var userThunk = getUser(22)(upperCaseName);
//
// async.sequence([userThunk, upperCaseName])(function(err, data) {
//   console.log(data); // JOE
// });
//
// module.exports = async
