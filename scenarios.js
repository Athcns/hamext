const textNodes = [
    {
        id: 1,
        text: "Life is so unfair! You are sent to your room as punishment for disgracing your uncl... step-father again." +
            "Claudius is so much worse compared to your dad who died out of nowhere! You don't understand why you need to respect " +
            "that horrible man or your disgraceful mother. Suddenly, there is a knock on your door.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Answer the door",
                nextText: 2
            },
            {
                text: "Ignore the door",
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "You open the door and Horatio, your close fri end comes rushing in telling you that he spotted a ghost in " +
            "the image of your father at midnight! Intrigued you tell Horatio that you will try and meet this supposed " +
            "ghost tonight. <br> Shortly the night falls and you leave your room, there are two ways down the hallway",
        scene: "Hamlet's Room | Hallway",
        options: [
            {
                text: "Go left",
                nextText: 4
            },
            {
                text: "Go right",
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: "You ignore the door but the person knocks harder.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Reluctantly you open the door",
                nextText: 2
            }
        ]
    },
    {
        id: 4,
        text: "You walk down the left hallway only to discover a dead-end.",
        scene: "Hallway",
        options: [
            {
                text: "Turn back around and go down the right hallway",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "You walk down the right hallway and arrive at a balcony overlooking Denmark. As the clock can be heard " +
            "striking midnight, the ghost Horatio talked about appears out of thin air.",
        scene: "Balcony",
        options: [
            {
                text: "You are surprised by the appearance of the ghost and stay still.",
                nextText: 6
            },
            {
                text: "You are scared by the ghost and run away in fear",
                nextText: 38
            }
        ]
    },
    {
        id: 6,
        text: "As you stand there in shock the ghost begins to talk," +
            "<br>Ghost: Son, I am your spirit of your father that is damned in hell. I must tell you that I did not die a natural death." +
            "<br>You: What do you mean father? How did you die?" +
            "<br>Ghost:I was murdered by the man that currently wears the crown while I was sleeping under an orchard." +
            "<br>You: That bastard! I knew something was off." +
            "<br>Ghost: Indeed, I must ask you Hamlet, take my revenge for me and murder that horrible man but leave your mother's sins to god.",
        scene: "Balcony",
        options: [
            {
                text: "Agree to the ghost's request",
                nextText: 7
            },
            {
                text: "Agree to the ghost's request and decide to have a knife hidden at all times",
                setState: { hasKnife: true },
                nextText: 7
            },
            {
                text: "Scream at the devil disguised as your father and run away from its temptations",
                nextText: 39
            }
        ]
    },
    {
        id: 7,
        text: "You decide to trust this ghost for now and decide to act crazy to trick everyone. After deciding so, you head back to your room for the night." +
            "<br>The next following days, Claudius and the others begin to wonder what drove you crazy. Out of nowhere you friends from school come to supposedly cheer you up." +
            "<br>Guildenstern: Hamlet! We've heard that you have been down in the dumps, Rosencratz and I have called some players for you in hopes of cheering you up!" +
            "<br>Rosencratz: That we have! Hamlet, we don't know why you are so down but we hope you enjoy the play they will show to the fullest!" +
            "<br>Shortly, the players come in and show a rehersal to you about what they could do.",
        scene: "Lobby",
        options: [
            {
                text: "You watch the play and suddenly gain an idea.",
                nextText: 9
            },
            {
                text: "You watch the play and think nothing of it",
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: "Watching the play, you gain an idea on seeing if the ghost you met last night was real or not. You decided to ask the actors to act out a play with a script" +
            " you made yourself. Without tell them that it re-enacts the supposed murder of your father. Deciding that if Claudius reacts then the ghost must've been true.",
        scene: "Lobby",
        options: [
            {
                text: "Request the actors to play out a scene you wrote",
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: "As you watch the play... nothing comes to mind. You just feel disappointed and as time passes on your depressions carries forward." +,
        scene: "Lobby",
        options: [
            {
                text: "Return to your chambers",
                nextText: 43
            }
        ]
    },
    {
        id: 11,
        text: "The actors agree to do the scene you wrote out. Excited you invite the king, Claudius and others to watch the play later at night." +
            "<br> Later at night, everyone arrives and the players begin to enact your script. You notice Claudius showing a reaction to the murder of the king.",
        scene: "Ballroom",
        options: [
            {
                text: "Enraged, attack the king",
                requiredState: (currentState) => currentState.hasKnife,
                nextText: 44
            },
            {
                text: "Enraged, begin to plan",
                nextText: 12
            },
        ]
    },
    {
        id: 12,
        text: "Everyone leaves after the king gets mad at the players. You are left alone. After seeing the kings reaction, you learn that the ghost was speaking " +
            "the truth and begin to plan on how to kill the bastard of a king. <br>An hour later, you are called to your mother's room.",
        scene: "Ballroom",
        options: [
            {
                text: "Ignore the call",
                nextText: 47
            },
            {
                text: "Head to your mothers room",
                nextText: 13
            },
        ]
    },
    {
        id: 14,
        text: "Before going to your mothers room, you go to your room to change.<br> You see a handgun next to your clothes.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Put the gun in your pocket",
                setState: { hasGun: true; },
                nextText: 15
            },
            {
                text: "Leave the gun there",
                setState: { hasGun: false; },
                nextText: 15
            },
        ]
    },
    {
        id: 15,
        text: "You arrive at the queens room and meet your mother, Gertrude. Although hateful you know she did like your father. You contemplate whether you should" +
            " tell her about you meeting the ghost of your father.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Tell your mother the truth",
                nextText: 16
            },
            {
                text: "Hide the truth",
                nextText: 54
            },
        ]
    },
    {
        id: 16,
        text: "Gertrude looks at you with disbelief and suspects that you are truly crazy. Enraged, you begin to thrash around and out of fear, the queen" +
            " shouts for help. Suddenly someone else hiding in the room screams for help.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Shoot the person hiding",
                requiredState: currentState => currentState.hasGun,
                nextText: 17
            },
            {
                text: "Don't shoot the person",
                requiredState: currentState => currentState.hasGun,
                nextText: 53
            },
            {
                text: "Do nothing (NO WEAPON)",
                nextText: 52
            },
        ]
    },
    {
        id: 17,
        text: "BANG! The gun goes off as the queen screams. A thud is heard as Polonius falls to the ground dead. As adrenaline rushes to your head, you drag the" +
            " body outside the room after telling the queen to stay quiet about all that happened.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Drag the body out",
                setState: { enemyLaertes: true }
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        text: "You drag the body down the hallway and hide it in the castle. Shortly, guards could be heard as they find you and put you under arrest under the order of the king. " +
            "You are shortly dragged to the king and he demands you to tell the location of Polonius's body.",
        scene: "Hallway",
        options: [
            {
                text: "Tell the king the location",
                nextText: 21
            },
            {
                text: "Spit at the king and say no",
                nextText: 19
            },
            {
                text: "Stay silent",
                nextText: 20
            },
        ]
    },
    {
        id: 19,
        text: "The king enraged charges you for treason. You are imprisoned and are shortly killed in secret",
        scene: "Prison",
        options: [
            {
                text: "Failed... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 20,
        text: "The king tired of you puts you in a cell to be interrogated the next day. " +
            "<br>The next day, the king demands you again.",
        scene: "Prison",
        options: [
            {
                text: "Tell the king the location",
                nextText: 21
            },
            {
                text: "Spit at the king and say no",
                nextText: 19
            },
            {
                text: "Stay silent",
                nextText: 20
            },
        ]
    },
    {
        id: 21,
        text: "The king tells you that as punishment for murdering Polonius, you will be sent to England with Rosencratz and Guildenstern as your escorts..." +
            "<br>On your way to England, everyone stays a night at an inn. Rosencratz and Guildenstern are asleep with their bags near the wall.",
        scene: "Inn Room",
        options: [
            {
                text: "Check their bags",
                nextText: 22
            },
            {
                text: "Leave their bags alone",
                nextText: 51
            }
        ]
    },
    {
        id: 22,
        text: "There are letters in the bag from the King of Denmark. They seem to be addressed to the King of England.",
        scene: "Inn Room",
        options: [
            {
                text: "Read the letters",
                nextText: 23
            },
            {
                text: "Leave the letters alone",
                nextText: 51
            }
        ]
    },
    {
        id: 23,
        text: "The letters reveal that it was a request to kill you. You quickly rewrite two letters that request the execution of" +
            " Rosencratz and Guildenstern.",
        scene: "Inn Room",
        options: [
            {
                text: "Replace their letters",
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        text: "Arriving at England, your friends go to the castle to give a letter to the king. A few days later, there was no signs of them" +
            " returning.",
        scene: "England",
        options: [
            {
                text: "Begin to plan a way home",
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        text: "You make friends with some pirates and send a letter home that you will be returning.",
        scene: "England",
        options: [
            {
                text: "Take the ship back to Denmark",
                requiredState: currentState => currentState.enemyLaertes,
                nextText: 26
            },
            {
                text: "Take the ship back to Denmark",
                requiredState: currentState => !currentState.enemyLaertes,
                nextText: 56
            }
        ]
    },
    {
        id: 26,
        text: "You arrive in Denmark and hang out with Horatio. Along with Horatio, you spot a gravedigger making a grave.",
        scene: "Courtyard",
        options: [
            {
                text: "Ignore the gravedigger",
                nextText: 57
            },
            {
                text: "Approach the gravedigger",
                nextText: 27
            }
        ]
    },
    {
        id: 27,
        text: "Filled with curiosity, you approach the gravedigger and ask what he is doing. He tells you that he is building a grave" +
            " under the order of the king.",
        scene: "Courtyard",
        options: [
            {
                text: "Ask about his opinion on Hamlet",
                nextText: 28
            }
        ]

    },
    {
        id: 28,
        text: "The gravedigger tells you that Hamlet used to be great but rumors had it that he went crazy and was sent to England." +
            "<br>You hear steps approaching",
        scene: "Courtyard",
        options: [
            {
                text: "Hide with Horatio",
                nextText: 29
            }
            {
                text: "Continue talking",
                nextText: 60
            }
        ]
    },
    {
        id: 29,
        text: "You and Horatio run to hide. Claudius, Laertes, Gertrude, and others enter wearing fully black clothing. They seem to be carrying" +
            " a body to the grave. As the body is descending to the grave, Laertes cries out and reveals its Ophellia, your fiance.",
        scene: "Courtyard",
        options: [
            {
                text: "Run out in anger",
                nextText: 30
            },
            {
                text: "Hide despite the sudden anger",
                nextText: 62
            }
        ]
    },
    {
        id: 30,
        text: "Out of anger you run at Laertes and begin to fight him. You are both restrained and brought to seperate rooms.",
        scene: "Courtyard",
        options: [
            {
                text: "Comply and go to your room",
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        text: "A little later, a servant comes and tells you that you have been challenged to a duel by Laertes",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Accept the duel",
                nextText: 32
            },
            {
                text: "Deny the duel",
                nextText: 58
            }
        ]
    },
    {
        id: 32,
        text: "You accept the duel and go to the throne room where the duel takes place. The duel starts and you take the first round with" +
            " a win. Claudius applauds you and offers a drink to you",
        scene: "Throne Room",
        options: [
            {
                text: "Refuse to drink it",
                nextText: 34
            },
            {
                text: "Take a sip",
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        text: "THUD! Your vision begins to blur and you die by the poisoned drink",
        scene: "Throne Room",
        options: [
            {
                text: "Failed... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 34,
        text: "Refusing the drink, you continue to duel. You win again and the queen take a drink in honor of you winning." +
            "<br>As you put away your sword, Laertes comes and cuts you with his sword. In rage, you steal his sword and cut him back.]" +
            "<br>THUD! The queen suddenly collapses and tells you the drink was poisoned. Laertes soon falls after grabbing the sword wound." +
            "<br>Laertes seems to have something he wants to tell you.",
        scene: "Throne Room",
        options: [
            {
                text: "Attack the king in rage",
                nextText: 35
            },
            {
                text: "Wait for Laertes to finish his words",
                nextText: 36
            }
        ]
    },
    {
        id: 35,
        text: "The guards confused, rush at you and stop you from attacking the king. You are charged with treason. As you are being dragged" +
            " out of the throne room, your vision begins to fade as your sword wound pulses. You succumb to the poison and die.",
        scene: "Throne Room",
        options: [
            {
                text: "Failed... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 36,
        text: "Laertes yells out that the sword and the drink were poisoned by the king.",
        scene: "Throne Room",
        options: [
            {
                text: "Attack the King",
                nextText: 37
            }
        ]
    },
    {
        id: 37,
        text: "As your vision begins to falter, you attack the king with the sword and shove the drink down his mouth. The king falls and dies." +
            "<br>You slowly fall to the poison and tell Horatio to share the true story to all the citizen . You shortly die.",
        scene: "Prison",
        options: [
            {
                text: "Congrats on the original ending. It's a Shakespeare tragedy so of course the true ending you die."
            }
        ]
    },
    {
        id: 38,
        text: "A few nights later and there is a knock on the balcony door of your room. The ghost has appeared again.",
        scene: "Balcony",
        options: [
            {
                text: "In shock you open the door to the balcony ",
                nextText: 6
            }
        ]
    },
    {
        id: 39,
        text: "You run back to your room after that devil tried to tempt you and return to sleep; however, you continue to" +
            " feel eyes staring at you...",
        scene: "Hamlet's Room",
        options: [
            {
                text: "watching...",
                nextText: 40
            }
        ]
    },
    {
        id: 40,
        text: "Everywhere. Invisible eyes are everywhere you go. The hallway you step into seems to be different.",
        scene: "Hallway",
        options: [
            {
                text: "watching...",
                nextText: 41
            }
        ]
    },
    {
        id: 41,
        text: "You begin to ask people about the eyes and they stare at you funny. Eventually, you are confined to your room where" +
            " eyes are everywhere staring at you on the walls...",
        scene: "Hamlet's Room",
        options: [
            {
                text: "watching...",
                nextText: 42
            }
        ]
    },
    {
        id: 42,
        text: "You eventually can't take the stares anymore and smash your head into the wall till you bled to death.<br>You are know as the" +
            " crazy prince that was cursed by the devil.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Failure... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 43,
        text: "Life doesn't seem so precious. You aren't like Pyrrhus who had the courage to kill. As time passes by you start staying in your room more" +
            ". As time passes by you suddenly feel incredibly sick after eating one of the meals brought by a maid. You are bedridden and known to Denmark as the" +
            " sad prince that died in his room.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Failure... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 44,
        text: "Enraged, you attack the king with the knife you had previously. However, the guards were quick to react and seize you to the ground." +
            " You are charged with the attempted assassination of the king and sent to the prison cells.",
        scene: "Ballroom",
        options: [
            {
                text: "*Clank*",
                nextText: 45
            }
        ]
    },
    {
        id: 45,
        text: "CLANK! The door to the prison cell is closed and you are stuck there. Expecting to be released soon you wait.",
        scene: "Prison",
        options: [
            {
                text: "Wait",
                nextText: 46
            }
        ]
    },
    {
        id: 46,
        text: "Oddly enough, no one appears for you. Not to release you or to feed you. It is dead silent in the small room with the only sound being the" +
            " water drop dripping. Eventually Horatio appears but brings news that the King has ordered no one to come help you as you tried to kill the king." +
            " You die due to starvation and are left to be known as the mad prince.",
        scene: "Prison",
        options: [
            {
                text: "Failure... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 47,
        text: "Ignoring the order from that disloyal mother of yours, you continue to roam the castle while blowing a flute like a madman.",
        scene: "Hallway",
        options: [
            {
                text: "Return to your chambers",
                nextText: 48
            }
        ]
    },
    {
        id: 48,
        text: "Days pass by with nothing happpening. You are left alone to do whatever crazy acts you wished. Someone knocks on your door.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Answer the door.",
                nextText: 49
            }
        ]
    },
    {
        id: 49,
        text: "A servant comes bringing news that you will be sent to England under the order of the king in two days time. You will be sent with " +
            " your friends Rosencratz, and Guildenstern.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Pack up your bags and get ready to head off",
                setState: { enemyLaertes: false },
                nextText: 50
            }
        ]
    },
    {
        id: 50,
        text: "You start your journey with Rosencratz and Guildenstern to England. On the way, you stop by an inn to rest for the night. You notice that " +
            "Rosencratz and Guildenstern are dead asleep with their bags slightly open on the wall.",
        scene: "Inn",
        options: [
            {
                text: "Check their bags",
                nextText: 22
            },
            {
                text: "Leave their bags alone",
                nextText: 51
            }
        ]
    },
    {
        id: 51,
        text: "You arrive at England with your friends! However, they seem to have letters to the king of England and leave you at the inn for the time being. As" +
            " you start to feel suspicious of them, you start walking around the town to blend in.",
        scene: "Plaza",
        options: [
            {
                text: "Loud noises are heard",
                nextText: 52
            }
        ]
    },
    {
        id: 52,
        text: "Out of nowhere, guards come running at you and put you under arrest. You are suspected for treason by the king of England and are" +
            " murdered in England.",
        scene: "Plaza",
        options: [
            {
                text: "Failed... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 52,
        text: "With no weapon in hand, you aren't able to kill the rat hiding behind the wall. The guards come rushing in and grab you. As they are restraining you," +
            " the king walks in and tell you that you will be sent to England with your friends, Rosencratz and Guildenstern to... recuperate.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Pack up your bags and get ready to head off",
                setState: { enemyLaertes: false },
                nextText: 50
            }
        ]
    },
    {
        id: 53,
        text: "You decide not to shoot the rat hiding in the room. However, the guards come rushing in and grab you as they hear the call for help from the queen. As they are restraining you," +
            " the king walks in and tell you that you will be sent to England with your friends, Rosencratz and Guildenstern to... recuperate.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Pack up your bags and get ready to head off",
                setState: { enemyLaertes: false },
                nextText: 50
            }
        ]
    },
    {
        id: 54,
        text: "Deciding not to reveal the truth to the queen, you have a fairly normal conversation. She asks about your wellbeing and acts as if she was a loving mother. However, in annoyance and disgust" +
            " you act crazy in order to scare her. Eventually she is frightened and you are dismissed to your room.",
        scene: "Queen's Bedroom",
        options: [
            {
                text: "Head to your room,
                setState: { enemyLaertes: false },
                nextText: 55
            }
        ]
    },
    {
        id: 55,
        text: "A few days pass by while you are allowed to do anything without anyone saying something. However, as a few days pass by the king annoyed with" +
            " your behaviour sends you to England with Rosencratz and Guildenstern.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Pack up your bags and get ready to head off",
                nextText: 50
            }
        ]
    },
    {
        id: 56,
        text: "You successfully return to Denmark and wait for an opportunity to kill Claudius. Finally a moment appears where Claudius has his back to you and you take the chance" +
            " to strike him. You manage to kill him but are imprisoned by the guards for killing the king. You eventually die in the prison cell to be known as a" +
            "horrible prince.",
        scene: "Throne Room",
        options: [
            {
                text: "Failed... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 57,
        text: "You ignore the gravekeeper and continue to walk with Horatio around the castle. After some time, you encounter Laertes and he seems enraged at the sight of you." +
            " Out of nowhere he challenges you to a duel.",
        scene: "Hallway",
        options: [
            {
                text: "You accept the duel",
                nextText: 32
            },
            {
                text: "You deny the duel",
                nextText: 58
            }
        ]
    },
    {
        id: 58,
        text: "After ignoring the duel from Laertes you return to your room and days pass by with nothing happening.",
        scene: "Hamlet's Room",
        options: [
            {
                text: "Walk out",
                nextText: 59
            }
        ]
    },
    {
        id: 59,
        text: "As you decide to go on a walk outside, suddenly someone out of nowhere comes and stabs you. You look and see that it is Laertes who seemed to have lost" +
            " his train of thought as he had eyes only filled with bloodlust. You start to fade out and die from bleeding out. You were known to be the unfortunate prince.",
        scene: "Hallway",
        options: [
            {
                text: "Failure... Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 60,
        text: "As you see the people coming in, one of them look up at you while carrying a body. They began to run at you and punched you. It was Laertes. <br>You and Laertes break" +
            "out into a fight. You arent sure why he came running at you but you wouldn't go down without a fight.",
        scene: "Courtyard",
        options: [
            {
                text: "Swing at him",
                nextText: 61
            }
        ]
    },
    {
        id: 61,
        text: "As the fight breaks out you are restrained by the guards and brought to your room.",
        scene: "Courtyard",
        options: [
            {
                text: "Go to your room",
                nextText: 31
            }
        ]
    },
    {
        id: 62,
        text: "Supressing your anger and saddness, you continue to hide with Horatio and watch the ceremony. You later get up and walk back to your room with Horatio" +
            " while filled with negative emotions.",
        scene: "Courtyard",
        options: [
            {
                text: "Go to your room",
                nextText: 31
            }
        ]
    },
]