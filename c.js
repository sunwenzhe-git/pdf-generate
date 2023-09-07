const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("请输入jiraId：", async (name) => {
  const branch = `CDCC-${name}`;
  await pushBranch(branch);
  rl.close();
});
async function pushBranch(branch) {
  await runCmd(`git checkout ${branch}`);
}
/* 运行命令
 *
 * @param{string}command 命令
 * @param{object}options 参数，默认值 { stdio: 'inherit' }
 */
function runCmd(command, options = { stdio: "inherit" }) {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve(stdout || stderr);
    });
  });
}
