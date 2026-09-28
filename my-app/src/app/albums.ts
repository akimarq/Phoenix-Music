export type TrackData = {
    group: string;
    title: string;
    year: string;
    description: string;
    cover: string;
    dedication: string;
};

export type AlbumData = {
    slug: string;
    title: string;
    subtitle: string;
    datePublished: string;
    description: string;
    cover: string;
    tracks: TrackData[];
};

export const albumTrackLogos: Record<string, string> = {
    "master-collection": "QuindiLogo.svg",
    "10th-anniversary": "10thAnnLogo_White.svg",
    "all-there-ever-was": ""
};

export const albums: AlbumData[] = [
    {
        slug: "master-collection",
        title: "quindecim",
        subtitle: "the master collection",
        datePublished: "2025",
        description: "Description Placeholder",
        cover: "quindi_master_collection_cover.png",
        tracks: [
            {
                group: "Arc 1: 2016",
                title: "Quindi Medley I",
                year: "2016",
                description: `By the time the idea of doing a medley ever formed, a good portion of the themes listed in this album were already in existence (I'd say about ~2/3). I had been writing these themes for nearly 5 years by this point, and yet I had never really entertained the idea of a medley until the guild's 5th anniversary in 2021. That was my original intended deadline for crafting this medley but I missed it by about 10 months - so I ended up releasing it on New Years Eve, just 2 months shy of the 6th anniversary. (I got really busy in 2021.
                
                Truthfully, there was no meticulous planning that went into the medley. I had originally intended on trying to link the tracks in the order they were written, but this idea fell apart really quickly. So it was put together by vibes more than anything, really; mostly by grouping tracks with similar vibes together, and trying to link them to each other. The front end was easiest because many of the tracks here were written close to each other, so it was relatively easy to see how they would fit together. More eclectic tracks like Glitch in the Shadow were harder to weave in, but I think the end results still came together in a way that was mostly satisfying. Mostly.`,
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Soar (OP1)",
                year: "2016",
                description: "Although Soar is the first theme to appear on this album, it was not the first to ever be written (including themes that are not included here, it was actually the 10th or so). However, it was the first theme that was written as an ‘opening’ theme for Quindecim as a whole - the idea being that if Quindi were an anime, this would be the opening track. As you’ll see throughout this album, this is a trend I have kept up over the years and Soar was my first genuine crack at it.\n\nSoar was heavily inspired by the first two Attack on Titan opening themes, and there are little things in Soar that are taken from both of these songs. Given that the guild originally started on the Attack on Titan Tribute Game (AoTTG), to me it made sense to model Soar off the themes from the original series - including very niche covers of said tracks.\n\nIt’ll be immediately obvious that Soar does not have any lyrics, and neither do any of the other tracks on this album. This is mainly because I’m a shit lyricist and an even worse singer, so I’ve never been able to add lyrics to anything I have written. In a way though, I think not writing lyrics kind of worked well as it allowed me to focus on actually making the music sound workable.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Skybound (ED1)",
                year: "2016",
                description: "Skybound was the first ‘ending theme’ that I wrote, and thus a deliberate counterpart to Soar. Just like I did for Soar, I ended up thinking about and listening to a lot of anime openings and endings to get an idea of what to write for this one. Skybound drew from Clannad in particular (a show which I had been binging at the time), which is why it is generally a softer track than Soar.\n\nThe OPs for some anime series are so good that the EDs pale in comparison (Attack on Titan; Ancient Magus’ Bride S1; Promised Neverland S1; FMA:B OP1); in other cases, the EDs vastly outshine the OPs (Bakemonogatari; Clannad); and in others still, both the OPs and EDs are equally excellent (Oshi no Ko S1; Your Lie in April; Death Parade; Demon Slayer S1). I wanted to write OPs and EDs in the latter way, i.e. they complement each other equally as much as possible. \n\nIn hindsight, I’m not really sure whether Soar and Skybound really achieved this goal. I have the benefit of hindsight from having spent 10 years cranking out garbage, so perhaps I shouldn’t judge these early works too harshly.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Raining Fury (Chell)",
                year: "2016",
                description: "Raining Fury I was a product of its time, in a good way. It was actually inspired by the way Chell superbanned people from Quindi AoTTG servers, which more often than not involved a Pulp Fiction-esque condemnation. That in turn reminded me of the infamous navy seal copypasta - in particular, this line came to mind:\n\n“... But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.”\n\nThe word ‘fury’ stuck in my mind, and thus, the name of Raining Fury came to be. Other work-in-progress names included \"Fire and Brimstone\" and \"Raising Hell\", but nothing I came up really fit until I witnessed Chell enacting her verbal fury on some poor soul on AoTTG in real time.\n\nMaybe a fun little aside - I derived many of the early themes’ melodic and rhythmic lines from pieces I had written previously (before Quindi existed, e.g. high school compositions), by taking basic ideas from these earlier works and crafting entirely new pieces out of them. Raining Fury is an early example of this; I got the idea for how to write the entire original Raining Fury from listening to its precursor while making myself lunch one weekend.",
                cover: "cover.jpg",
                dedication: "chell"
            },
            {
                group: "",
                title: "Ascension (Phoenix)",
                year: "2016",
                description: "I have always struggled to write themes for myself. After all, I began writing these themes for other people from day one, and describing other people with music has been more or less the mission since. Even now it feels somewhat strange to ponder: how does someone dedicated to capturing others capture themselves instead? I’ve never been smart enough to engage in this thought experiment, so I don’t have any real answers. \n\nIt’s hard to say exactly what this piece is or means. I was, of course, inspired by the AoT soundtrack at the time (especially Bauklotze), as well as the Ace Attorney soundtrack. Both of these sources of influence found their way into my writing of this piece. At a broader level, I don’t think Ascension reaches the same kinds of heights that the other themes do in terms of how epic/quality I want them to be; to write something like that for myself feels like nothing but a disservice to everyone else.",
                cover: "cover.jpg",
                dedication: "phoenix"
            },
            {
                group: "",
                title: "Light From Shadow (Shiro)",
                year: "2016",
                description: "Light From Shadow is another piece that is a product of its time. An unusual aspect of this work’s creation is that I didn’t come up with its name; instead, I was given the title to work with by someone else before the actual piece was even written. It provided a great start for what I eventually ended up writing, because it gave me a sense of how I should capture Shiro’s OC/character at the time. In the end, I decided to settle for something halfway between “this is really happy” and “there’s a tragic backstory behind this”, given the title seemed to blend both really nicely. \n\nI wrote the main melody of this piece - the soft, lilting melody at the very start - in another Quindi-related work that came before this one. Somehow that melody just felt right for a theme about Shiro, so I used that melody as the basic building block for the full piece. That melody also led me to write just for a solo piano, and in that regard Yiruma was an incredible source of inspiration (as Yiruma is for many, many things I write). I’ve always had a soft spot for this track over the years, not least because it always used to gut-punch Josh’s feelings (to my surprise).",
                cover: "cover.jpg",
                dedication: "shiro"
            },
            {
                group: "",
                title: "Glitch in the System (HABIT)",
                year: "2016",
                description: "A little unfun factoid about me is that I have a degree in musicology. Studying musicology meant that I had to learn not only conventional music theory, but also a bit of non-conventional music theory. Occasionally, the things I learned during my musicology studies did end up in these themes; I started writing themes relatively early on in my degree, so I tended to incorporate things that I had learned. Glitch in the System is maybe the best example of this.\n\nWithout wanting to lead you as the reader down an unproductive rabbithole, this theme is built from a series of number sequences that I sourced directly from Quindis. There are five in total:\n\n5 1 7 2 11 6 4 9 12 10 8 3\n4 5 8 2 1 3 9 7 6 11 10 12\n2 4 8 1 3 7 10 11 9 6 5 12\n8 6 9 4 7 2 3 5 1 12 10 11\n1 6 3 2 8 7 4 5 9 11 10 12\n\n(It might be pretty easy to guess what these numbers represent, but I’m not sure how obvious it’ll be to identify them in the track.)\n\nWhy go for something so… esoteric? None of us except Chell know anything about HABIT, and even then what Chell knows is extremely limited. Hab (as we affectionately call him/her/them/it?) has always been this nameless, faceless enigma that we’ve kind of just come to accept - or so it goes in Quindi lore, at least. Glitch in the System, with all its oddities and spark/static effects, was my attempt at capturing that. It’s not one of my favourites nowadays, but to this day it’s still one of the quirkier things I’ve ever done.",
                cover: "cover.jpg",
                dedication: "habit"
            },
            {
                group: "",
                title: "Blackwing (Kana)",
                year: "2016",
                description: "What actually went through my head when I wrote Blackwing? If there was something very concrete here, it’s evaded my memory since. Writing down some thoughts on my composition process for each piece has been enlightening in its own way because I don’t remember the process behind every piece. Blackwing, unfortunately, is one where I have a couple of gaps in my memory.\n\nAt the time though, Kana was particularly into music boxes. He had asked me to write a short one-off piece using a music box way back in 2016 or so, and I did - this track is now in the Extras collection (“Untitled 1”). When it came time to write the full version of Blackwing, I thought it’d be neat to actually revisit that short piece that I wrote and incorporate its main tune into this full version. You can hear it come in with the drop right after the first refrain (1:40).",
                cover: "cover.jpg",
                dedication: "kana"
            },
            {
                group: "",
                title: "Shadow Hunter (Josh)",
                year: "2016",
                description: "Shadow Hunter was both fun to do and incredibly difficult. It was fun in the sense that, like Glitch in the System, I tried to shake off some of the conventions that I was used to writing with and create something dissonant and harsh. Uunlike GitS with its fun number sequences, though, I wasn’t using any particular formula or basis to achieve a similarly bizarre-sounding (but ultimately worthwhile) track. This really was kind of off the cuff, and for better or worse I think it shows.\n\nThis track was inspired by one of Josh’s OCs at the time. This OC, Virunga, was described as a half-demon who had many primal urges and desires (for want of a better description). To capture the inherent chaos in that OC, I wanted to make this theme a bit more chaotic and unstable-sounding.\n\nThe central drum beat actually came from a work that I never finished, from around 2013. Its working title was “Midnight Plains”, and the idea was a piece that was centered around something like a savannah or desert at night. Miraculously, I still have the Sibelius file for this original piece, and looking at it now while I write this I can see that I specifically listed an udu - a Nigerian clay drum - as one of the instruments. I never finished “Midnight Plains”, but I did take the underlying drum beat and I turned it into Shadow Hunter. I think it’s better for it now!",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "Arc 2: 2017",
                title: "Take Back the Sky (OP2)",
                year: "2017",
                description: "In between writing Soar, Skybound and this theme, I got hooked onto quite a few anime series. Two big ones that I watched before writing this theme were Ghost in the Shell SAC and RWBY seasons 1-3, both of which have fantastic soundtracks and opening themes. Soar had been sitting around in my growing list of themes for a while now, but it was already getting a little bit stale - so I had a really strong urge to write a new theme to replace it. Take Back the Sky was born from that idea; essentially, what if there was a Season 2 of a Quindi anime?\n\nFor the longest period of time, this piece had no name. I used to post updates frequently (almost nightly) under the creative name of “Untitled”. I asked a few people for name ideas, but none of them really stack with me. Some of the ideas were “Tomorrow Will Be Better”, “Soar V2” (the name I used internally for a while) and a couple of Japanese names that currently evade me. What helped in the end was thinking about what lyrics I could see for this track. I knew they wouldn’t be overly positive like “Tomorrow Will Be Better” would suggest, but it wouldn’t be downright dark and moody either. It would be somewhere in between - about being at least a tiny bit hopeful about the future, and being willing to fight for it.\n\nIn contrast to Soar, which I feel was a fair bit of heavy plodding, I think Take Back the Sky was a bit more energetic and refined in its construction - even if the end result still feels and sounds like a wall of everything happening at once.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "A Flicker of Light (ED2)",
                year: "2017",
                description: "It sounds obvious, but the themes are generally written for people and about people. Naturally, that means that I typically inject very little of myself into the themes beyond trying to convey how I interpret other people’s personality and/or their OCs. This isn’t to say that I never write music based on my own emotions, it’s just that I usually have other means of doing that (e.g. parts of the All There Ever Was album were nothing if not self-indulgent).\n\nThis track is a rare exception to that principle. Unlike most of the other themes, A Flicker of Light was a personally motivated piece that was based on things that I was feeling/experiencing at the time. While I won’t dwell on the specific motivations/inspirations underlying this track, a good word to sum it up would be “saudade”. The name “A Flicker of Light” is a metaphor for this feeling.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Crimson Rush (Shimo)",
                year: "2017",
                description: "Technically speaking this theme was written at the end 2016, but I think it fits better with what I was attempting post-OP2. Crimson Rush was actually written to complement another theme I had written (not present on this album, but in the Extras). In short, Shimo’s theme and this other theme were meant to be loose counterparts to each other, which in turn influenced some of the stylistic choices made here.\n\nMaybe the most notable of these choices is just how upbeat and high this track is. If I had the skills and know-how at the time, there’s a good chance I would have written this along hyperpop lines - but all I had was Sibelius and its shitty soundbanks. So, I wrote something with a bit more… I guess pop punk in mind (knowing that Shimo wasn’t totally against that kind of music). Someday though, I might revisit this one once I have the time and energy to properly learn how to make hyperpop-type music.",
                cover: "cover.jpg",
                dedication: "shimo"
            },
            {
                group: "",
                title: "Dragonfire (Brian)",
                year: "2017",
                description: "A decent proportion of my writing during this general time period was somewhat personally driven, such as ED2. Dragonfire was a nice break from working on some of those other things, and a chance to just do something different. I had a fair amount of fun with this one by not really putting too much thought into it at times. Some of the themes I’ve written have been more carefully crafted or use very specific ideas (see Glitch in the System), but the overall process of writing this track was much more free-flowing. The main drum pattern heard in the bridge (0:34) was put in place first, and everything else kind of came around it.",
                cover: "cover.jpg",
                dedication: "brian"
            },
            {
                group: "",
                title: "Call of the Wild (Alika)",
                year: "2017",
                description: "I distinctly remember asking Alika directly what she thought her own theme would/should be, and I got two answers: dubstep, and Celtic music (not to be confused with our own Celtic in the guild). Although I would have loved to write dubstep (and still want to one day), none of my tools at the time would have been remotely suitable for the task.\n\nNaturally, this meant that I had to go for something Celtic… not that I knew exactly what that entailed either, but I was at least a good step closer to that than writing dubstep. In the end, I ended up going for something loosely inspired by Celtic music, but also ended up incorporating more of Alika’s vibes directly along the way. Wolves in particular are/were a big part of her personal imagery, and so the idea of “wolves in the night” was a guiding concept for this track.",
                cover: "cover.jpg",
                dedication: "alika"
            },
            {
                group: "Arc 3: 2018-2019",
                title: "Yuuhi no Omoide [Sunset Memories] (OP3)",
                year: "2018-2019",
                description: "For the longest time - in fact, up until this album was collated in 2025 - there was no OP3. I find it difficult to explain why this is the case, other than to say that 2018 in general wasn’t a super productive year for me - as evidenced by this arc of the album having the lowest number of tracks despite spanning two years. Reflecting on the 2018-2019 period, I remember hitting a fairly massive period of writer’s block, and for some time I was unsure if I would continue writing music.\n\nStill, that doesn’t mean I never tried. Although this piece was only completed in late 2024/2025, the main riff in the introduction was written in about late 2019/early 2020. It was one of many ideas/concepts that I started but just never got around to finishing until much later. Given both the time the original idea was written, and the glaring gap in the discography, it felt fitting to make this track OP3 when I finally did find a way to finish it, especially because of how it complements Shine.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Shine (ED3)",
                year: "2018-2019",
                description: "In contrast to OP3, I did actually write ED3 in 2018. For all intents and purposes, Shine is a really simple track, and I think that’ll be obvious if you listen to it. In hindsight I think that’s okay given that 2018-2019 weren’t super productive years for me in general, as described above. I was really making music just to keep something going and not get rusty, and this was one of the few pieces that made it out alive.\n\nIt’s hard to remember a lot about the process behind writing this track. I have a feeling that it was very much a “go with the flow” kind of composition process. I think I just wanted to write something that was vaguely feel-good and warm, without being overly cutesy. That’s certainly the vibe I get listening to this track now - something that might come on over images of a sunset.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Raining Fury II (Chell)",
                year: "2018-2019",
                description: "Raining Fury II was my first foray at trying to write a second theme for someone - something that I still haven’t done too much of. I can’t quite remember why I started writing a second Chell theme, but I have a sense it’s because I started a new track and realised it fit with the first Raining Fury.\n\nI think this track takes a nice turn mood-wise compared to the first Raining Fury. It still retains the signature heaviness of the first track and its core melodic/rhythmic idea, but starts and ends in a very different manner. And while at the time I never foresaw Raining Fury III coming into being as well (see below), I think this piece forms a pretty good ‘glue’ between that track and the original too.",
                cover: "cover.jpg",
                dedication: "chell"
            },
            {
                group: "",
                title: "After Dark (Kai)",
                year: "2018-2019",
                description: "This is technically Kai’s second theme, but unlike the other second themes, After Dark replaces Kai’s original theme. This is because I never liked what I did for Kai’s original theme; it felt surface-level, a bit rushed and ultimately not all that meaningful. I had wanted to replace Kai’s original theme for a while, and condemn it to the back shelves of my collection.\n\nStill, the two themes share some things in common. For starters, both of them were jazz-inspired. However, the original theme was really flimsy and generic to the point of being derivative - which, in hindsight was very clearly not the right choice for someone like Kai. In contrast, I think After Dark has a more coherent, full sound with a more defined narrative, both of which I think fit Kai far better. Kai is someone I would very happily have drinks with (same with many others!), and I wanted After Dark to almost be the background to such a setting. I think After Dark managed to achieve what I wanted the original track to do, and I was pleased at how good of an addition it was to this collection.",
                cover: "cover.jpg",
                dedication: "kai"
            },
            {
                group: "",
                title: "Komorebi (Sol)",
                year: "2018-2019",
                description: "The word komorebi (こもれび) in Japanese refers to the beams of light that you see shining in between the leaves and branches of trees. It’s a word that has no direct English translation, despite it being a phenomenon that we as English speakers understand. I’ve always found the concept and the word quite beautiful.\n\nKomorebi took me a year to write, in part because I initially had no idea what I really wanted to say with it. It was only with time that I really managed to figure out what I wanted this piece to be, because this piece’s development coincided with many things to do with Sol’s and my relationship (in general terms). Like other tracks during this time, Komorebi evolved in an entirely organic way; it grew slowly, and without much of me forcing something down on a page. Komorebi still remains one of my favourites for obvious reasons, and is a piece I’ve revisited time and time again.",
                cover: "cover.jpg",
                dedication: "sol"
            },
            {
                group: "Arc 4: 2020-2022",
                title: "Fly Onwards (OP4)",
                year: "2020-2022",
                description: "It took a long time for me to even consider writing another OP or ED after Shine. In the years between Shine (2018) and Fly Onwards (2021) many major events happened in my life, all while the literal Covid-19 pandemic happened in the background as well.\n\nAfter a year of putting my head down in my personal life, and another year of massive turbulence, I started getting back into writing themes more regularly in 2021. Fly Onwards came out of that process, and I wanted it to be a return to form. It emulates some aspects of Soar and Take Back The Sky, such as the inspiration from anime openings and the focus on melodic content. At the same time, I wanted this new OP track to reflect something new and different to previous OPs. In particular, I had been reflecting a bit on how terrible 2020 was in many ways, but also how we as a guild had huddled together during that time and came out of it the other end. The name Fly Onwards is a deliberate nod to persevering even when things get rough.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Until We Fall (ED4)",
                year: "2020-2022",
                description: "This track is another one that was started several years before it was actually finished (in this case, 2021). This track was only completed and named in late 2024, meaning that this album is the first time it is being presented in full, just like OP3.\n\nA very common problem I run into when writing themes is trying to figure out where a piece should go next. Nine times out of 10, I’ll find something that works (or something will come to me), and everything kind of works out. This piece was an example of the other one time out of 10. I would revisit this one constantly, only to find myself with writer’s block time and time again. It was only in late 2024 that I figured that the best way to finish this piece was to keep it simple - the opening was already so clearly defined that it was worth reusing at the end, and just trying to ‘glue’ the rest together.\n\nThe name was chosen to specifically complement OP4 - i.e. Fly Onwards, Until We Fall.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "In the Zone (Robin)",
                year: "2020-2022",
                description: "This track is unfortunately another instance where I really wish I could remember exactly why I wrote the track the way that I did. Sadly, I have basically no records at all as to how this track came to be; I don’t have any draft/work-in-progress versions, no written or draft notes, no messages from me talking about it and no memory of how or when this track was written.\n\nThere are only two thoughts that come to mind when I listen to this again: a) it weirdly feels like a track from one of the earlier Sonic games, and b) it sounds like it would be a good counterpart to Dragonfire. I can't tell if either of these ideas were things that I had also considered at the time - I have a feeling that the second point was, because I know Brian and Robin are good friends - but I think this track still turned out ok despite it?",
                cover: "cover.jpg",
                dedication: "robin"
            },
            {
                group: "",
                title: "Song of the Voyager (Celtic)",
                year: "2020-2022",
                description: "Song of the Voyager is a piece I had so much fun with. Celtic’s and Daisy’s themes were written very close to each other, and part of that is because they were both included in Medley I. Medley I came around shortly after they joined Quindi, and I had unusually clear ideas as to what themes I wanted to write for both of them.\n\nThis theme draws heavy inspiration from sea shanties. C, of course, is a sailor herself and is huge into sea shanties (she introduced me to so many of them), so fashioning it loosely on sea shanties and sea songs was a no-brainer. This track isn’t intended to be a sea shanty per se but it tries to draw on a lot of its features, such as having lots of ‘voices’ and some call-and-response. It feels like the kind of track that would be fun with lyrics, but I’ve never been able to come up with anything good.",
                cover: "cover.jpg",
                dedication: "c"
            },
            {
                group: "",
                title: "Dreams of the Stars Above (Daisy)",
                year: "2020-2022",
                description: "Dreams of the Stars Above re-uses a bit of material from a composition I did in high school called \"Fragments\". In brief, \"Fragments\" was based on a photo board of a story depicting someone gaining a friend, and subsequently losing them. This piece had two very clear thematic halves - one for meeting the friend and one for the friend disappearing - and it was the second half that was adapted into Dreams.\n\nFunnily enough, though, I wanted this track to envision almost the exact opposite story to what I originally wrote \"Fragments\" for. I can think of few greater dreamers in the guild than Daisy, in a good way. Ultimately, the narrative in my head for this piece was a story of looking up at the night sky and dreaming of the worlds, and friends, beyond where we are now. To me this is also how the piece plays out; I like to think that there is an obvious but notable moment when Daisy/the character looks up to the sky, and finally sees the stars above.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "All There Ever Was (Phoenix)",
                year: "2020-2022",
                description: "Ever since Ascension I grappled with the idea of giving myself another theme, and I made several attempts at this between 2016 and 2020. However, the initial concepts/ideas I had just never quite worked - I was never satisfied that these initial ideas were actual representations of me as a character and/or as a person. I think All There Ever Was still doesn’t quite capture who I am, but it gets closer.\n\nAll There Ever Was was written in the middle of the Covid-19 pandemic, at the height of a round of recurring infection waves and extreme anxiety. I was feeling particularly vulnerable for many reasons: the pandemic’s role in that is obvious, and it had coincided with me leaving home and moving overseas by myself to start a new chapter of my life. To say that 2020 did not go the way I imagined is an understatement, and it was against this backdrop that All There Ever Was was born. I think it would be weird of me to not state that writing this was cathartic, at least in some form, and a way of dealing with having my life flipped upside down at the time.\n\nThe name of the piece comes from a phrase/sentence that, for some reason, stayed firmly in my mind as I wrote it: “[I am] all there ever was, and [I am] all there ever will be”. I don’t know where I got this from as I can’t find a quote that even remotely resembles the above phrase. However, I think that it nicely sums up how I feel both about this piece and about myself. In short, I think the idea of “all there ever was” is my way of just accepting that things are the way they are, and no matter what happens.",
                cover: "cover.jpg",
                dedication: "phoenix"
            },
            {
                group: "",
                title: "Shiro of the Wind (Shiro)",
                year: "2020-2022",
                description: "From its description, it might be possible to tell that Light from Shadow (Shiro’s first theme) has been one of the more memorable tracks for some people in Quindi. However, it was written in a very different Quindi to today - one where AoTTG was still our main platform, and one where the dynamics of the guild were much more involved and complex (not always in a good way). A lot of the background for Light from Shadow was caught up in that. As a result, to me Light from Shadow has always been a slight outlier as a track that was relevant at one point in time, but maybe has become less so as time has gone on. So I’ve never been too sure as to how well Light from Shadow has aged as a track for and about Shiro.\n\nShiro of the Wind was written to complement Light from Shadow, but not replace it. I don’t really know what word best describes what I wanted with this track, but I did want it to be something a bit more hopeful than the somewhat gloomy sound of her first theme. Maybe hopeful is the word I'm looking for? Regardless, I wanted this track to serve as a counterpart to her original, and to perhaps capture the Shiro that I know today rather than the one in 2016.",
                cover: "cover.jpg",
                dedication: "shiro"
            },
            {
                group: "Arc 5: 2023-2024",
                title: "Guiding Star (OP5)",
                year: "2023-2024",
                description: "The main melody for this track, which is in the opening, had actually been written sometime back in 2018. It was originally written to be the main moment for an orchestral work called “Reflections”, but this idea never really got off the ground. Although I really liked this melody in isolation, I just couldn’t work an entire orchestral piece around it despite my best efforts.\n\nI remember that when I started thinking about an OP5, I trawled through every unfinished draft and half-baked idea I could find to get something, anything to work with. This led me to the draft file for “Reflections” after sitting in the metaphorical file drawer for a couple of years, and in turn rediscovering this main melody. I’m glad I could use it here.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "The Clouds Remind Me Of You (ED5)",
                year: "2023-2024",
                description: "This track was another one that came from a more personal place, though not for any specific reason. I just wanted to write something that captured both a sense of nostalgia and joy for myself more than anything (2023 was a stressful year). It’s probably a little unusual to have an anime ED-style track be so stripped back and bare, but I wanted to express something really… simple, without all of the usual embellishments and layers that I write my tracks with.\n\nOne thing that I didn’t really clock until I started writing these notes was that I’ve named a lot of my tracks around sky-related imagery: Soar, Skybound, this track, Fly Onwards, Take Back the Sky, Dreams of the Stars Above… I don’t really know why I’m so taken by sky-related imagery, especially for these themes. I don’t think it’s an age thing because I was 19 when both Soar and Skybound were written; maybe I just find something sentimental in the idea of looking up at the sky and finding meaning in it.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "All or Nothing (Clyde)",
                year: "2023-2024",
                description: "In 2023, I started becoming acutely conscious of the fact that I had a growing bunch of tracks associated with people that were no longer around - more often than not, for disappointing reasons. These were people that did not deserve a place in Quindi, in my opinion, yet I was reminded of their existence every time I opened my music folder and saw the mp3 files with their names still attached.\n\nI decided to start reclaiming some of these works, first by stripping these tracks of their original associations and then by reusing some of the musical material in these older tracks to make new ones. Part of the reason for reclaiming this material was because I felt that the musical content in it was actually workable, and I thought that it would be a shame to have it permanently associated with people I didn’t want. I asked Quindi for their thoughts on whether this was an okay thing to do just to make my intentions clear, and the feedback was positive.\n\nAll or Nothing is one example of me reclaiming material. The first part was written as part of Medley I, but some parts that come after were repurposed material from an older theme. Personally, I think said material fits far better (and is ultimately more deserved) in Clyde’s theme, which really needed to be high-octane from start to finish. I wanted Clyde's theme to essentially be hype boss battle music, and the one snippet I reclaimed fit this goal really well.",
                cover: "cover.jpg",
                dedication: "clyde"
            },
            {
                group: "",
                title: "Ignite (Radar)",
                year: "2023-2024",
                description: "All or Nothing and Ignite were both introduced in Medley I, though the former was fleshed out first. Given how close Clyde and Radar are, it was obvious to me that Radar’s theme had to satisfy the following characteristics:\n\n- It had to complement Clyde’s theme\n- It had to have an equal level of badassery to it\n- It couldn’t be too similar at the same time - Radar and Clyde are distinct people\n\nIgnite was written to try and meet these criteria. It features a similar kind of structure and a similar level of intensity, while not necessarily being as high-octane as Clyde’s theme. One key point of difference is that the drums in Ignite are deliberately heavier because Radar himself is a drummer. I really liked how this theme turned out to be grittier compared to Clyde’s; I wanted this track to instill the feeling of Radar slowly, methodically setting something on fire and watching it go up in flames - boss battle music, again, but with a grungier vibe.\n\nShout out to Radar for his suggestions, too. I didn’t quite stick the landing the first time I shared this track, and his comments helped me refine this to be far better. (The 10-year version is even better.)",
                cover: "cover.jpg",
                dedication: "radar"
            },
            {
                group: "",
                title: "Raining Fury III (Chell)",
                year: "2023-2024",
                description: "When I wrote the original Raining Fury, I don’t think I ever envisioned that it would grow into a trilogy. In fact, at the time I didn’t think I would even be writing Quindi themes after the first year or so, and so reflecting on this specific entry is kind of funny in hindsight. In a similar vein, writing a third iteration of Raining Fury wasn’t something I considered doing until Chell herself made a request for me to revisit Raining Fury in 2023. Initially I wasn’t sure I had anything else to offer in terms of making a new Raining Fury track, but I was pleasantly surprised that I was able to come up with what I did. Raining Fury III in particular takes on a noticeably different, more villainous vibe, like a third-phase boss fight. It retains much of the DNA of the original though, especially in the second half of the track.\n\nStill, I really don’t think I have anything left, so I’m not sure there will ever be a Raining Fury IV. (I’d rather write something new instead.)",
                cover: "cover.jpg",
                dedication: "chell"
            },
            {
                group: "",
                title: "Valkyrie (Tess)",
                year: "2023-2024",
                description: "I always feel a bit of shame when I think about how long this theme took. It might just take the prize for “longest time it took to write a theme”, coming it at nearly five years of continuous work. (I’m not counting OP3 in this because the actual writing for that one happened very quickly.) The reason for that is that no matter what I tried, this was one theme that would just not come together. There are at least three different concept snippets for Tess’ theme that I still have saved, never mind how many snippets I probably deleted out of frustration. While some of these concepts eventually found future homes, others did not. It actually wasn’t until Medley I that any musical material for Tess’ theme was written - and, perhaps a bit stubbornly, I locked myself into that material by including it in the medley (I couldn’t retcon it, after all). I think it did pay off though, because letting it iterate over another 3-4 years clearly allowed it to come together.\n\nValkyrie are, of course, the Norse female warriors who guide the souls of the dead to Valhalla. I don’t think the ‘carrying the dead’ part really applies to Tess, but I do think the inherent nature of a guiding or helping figure does, and that was the depiction I wanted with the choice of name. I also wanted this track to be upbeat, just like Tess. By this point, it’s probably obvious that the names I choose aren’t perfect on the surface but still broadly fall in line with what I’m intending…",
                cover: "cover.jpg",
                dedication: "tess"
            },
            {
                group: "",
                title: "Flawless Victory (Aries)",
                year: "2023-2024",
                description: "Flawless Victory is the first of four themes that were originally conceived when writing Medley II. Realistically, there was no way an Aries theme would be anything other than something jazz-funk. I described Aries’ OC as “if Yelan [Genshin] was a JoJo character” when introducing this piece, and I think that’s still fairly true to form (just look at any art of her OC, if you can).\n\nThe basic vibe for this track was completed relatively early on in the process of writing Medley II - although truthfully, I had wanted to write something like this for several years. I just didn’t have any ideas in me up until I started working on Medley II. Once I got underway though, it was actually relatively smooth sailing from what I remember - I kind of just got into it, and honestly it was a huge amount of fun. There’s also a bit of a cheeky reference to a slightly obscure meme in the track, which at least one person has picked up on. The hint is that it’s in the saxophone line.",
                cover: "cover.jpg",
                dedication: "aries"
            },
            {
                group: "",
                title: "Dominus Noctis (Xelia)",
                year: "2023-2024",
                description: "Dominus Noctis - “Lord of the Night” in Latin - has become one of my absolute favourites on this album, as selfish as that sounds. Although it was written as part of Medley II, it wasn’t until I actually sat down and started working it into its own dedicated theme that I realised just how much I enjoyed it as a concept and as a track. It's a rare moment indeed when I get surprised by something I've written myself, but I remember my jaw dropping when I rendered an early version of the first 15 sections. I was floored at how it sounded, and locked in to finish it very quickly. I turned this track around in less than two weeks.\n\nI think this track is unique, without a doubt - it has a really distinct sound that I think separates it from many other tracks in this collection. The track itself draws on both Xelia's OC and herself as a person. Her OCs, as far as I understand/remember, have tended to draw heavily on gothic/dark academia aesthetics. The real Xelia is a mischievous gremlin with a hilariously fatalistic sense of humour, and I think this track suits that as well.",
                cover: "cover.jpg",
                dedication: "xelia"
            },
            {
                group: "",
                title: "A Perfect Medley (Leafy)",
                year: "2023-2024",
                description: "A Perfect Morning is the third of four themes that was written with Medley II. In contrast to the other three, though, this track isn’t scored for many instruments or highly ornamented in any way. By design, the track is simple, short but sweet. The reason for this is because Leafy’s appreciation for some of the simplest, but cosiest things in life has always stood out to me.\n\nWith that in mind, I imagine this track to be a bit like sitting in the soft sun, enjoying a morning cup of coffee and a slice of toast or something. To me, anyway, there are few better mornings than that.",
                cover: "cover.jpg",
                dedication: "leafy"
            },
            {
                group: "",
                title: "Prelude to the Dawn (Shi/Sasha)",
                year: "2023-2024",
                description: "Prelude to the Dawn is the last of the four themes that originated with the second Quindecim Medley. When I sat down to think about what this track should sound like, two thoughts immediately came to mind. First, Sasha is such an integral part of Shi’s art that it almost felt wrong to write without placing Sasha center stage. Second, I discovered that the only way I felt like I could do this theme justice was to draw on the same kind of creative spirit that I had when AoT(TG) was a much bigger part of my life - in part because Shi was also on AoTTG, and I wanted to draw directly from this as a source of inspiration.\n\nTo that end, Prelude is a little different from other themes in this arc, in that it’s both reminiscent of the past and forward-facing at the same time (if that makes sense). It also has a little more ‘narrative’ than most of the other themes, i.e. I think the track more clearly expresses a short story as opposed to a theme/intro music for the character/person in question.",
                cover: "cover.jpg",
                dedication: "shi"
            },
            {
                group: "Arc 6: 2025-",
                title: "Daybreak (OP6)",
                year: "2025",
                description: "I started working on The Master Collection in very early 2025 (within the first 2 weeks), and as part of that I resolved to include brand new themes, including a new OP and ED theme. After what felt like an immensely productive run in 2024 knocking out six major themes, I hit another creative brick wall. That burst of creative inspiration that led to those six themes had completely run out and I had no idea where to start with a new OP theme. To be honest, I’m really not sure how this track came together afterwards, but I have a feeling it involved me digging through the ever-increasing pile of discarded ideas and unfinished drafts again to find a small snippet of material to work with. I kind of like how simple this track ended up being though, so I suppose I can’t be too concerned about how I got there in the end.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Clockwork (ED6)",
                year: "2025",
                description: "Most themes have been relatively easy affairs - e.g. all the themes related to people in Quindi have generally been fairly straightforward to write because I usually have a clear enough image of what I want the theme to portray. On rare occasions, writing a theme ends up feeling like pulling teeth, and figuring out an ED6 was one of them. A number of tracks were rotated in and out of this slot and a couple of ideas were scrapped entirely before this track came into being.\n\nThere is no real imagery or story behind this track, like OP6. It was written because I needed to fill a gap for an ED6, and didn’t want to repeat the mistake of sharing an OP without its corresponding ending theme (and vice versa). The name Clockwork wasn’t even settled until a couple of days after the track was finished, and was mostly chosen based on the repetitive ‘ticking’ melody line that features right at the start and end. I’m still trying to figure out how I feel about writing so impersonal and detached, but I also think it turned out pretty well - good enough to be featured here, at least.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "The First Star in the Sky (Sol)",
                year: "2025",
                description: "Nearly 7 years had passed since Sol’s first theme, Komorebi, before this theme was written. Those 7 years since have been some of the most wonderful years I have ever had despite their struggles. I had long had the idea of writing a second theme for Sol in the back of my mind, and after those 7 years it finally felt like the right time and place to do so.\n\nThe main idea for this theme is actually a transition section from Medley II, but I liked it so much that I thought it needed to be spun out into its own track. Fittingly, it also came right after Komorebi in that medley so it intentionally shared some thematic DNA with that theme. It was a no-brainer.\n\nI sat on what to name this one for the longest time, because I wanted to find a name that would capture both the vibe of the track and something about what I wanted to say/depict with it (the same problem I had with Komorebi). But I’ve always found a great sense of comfort and safety in the night sky, and after a number of days I settled on the name The First Star in the Sky. In one sense, the track is exactly as this name describes; it is about the feeling of looking up at night and seeing a singular star, shining more brightly than the others. There are many other things I could say too, but perhaps that image is what I want this track to capture most about Sol as well.",
                cover: "cover.jpg",
                dedication: "sol"
            },
            {
                group: "",
                title: "Purple Moon (Maya)",
                year: "2025",
                description: "Quindecim lore states that in the beginning, there were four members who formed the core of the guild. Chell and I, of course, were two. The third is described in the next track. The fourth was a quiet girl who went by Maya. The way Maya was described on the old Quindecim website summed her up perfectly:\n\n“Knowledge is Power for Maya. Quiet but fiercely intelligent, Maya is able to put to rest any argument. She is the calmest of the group and is extremely generous towards others. ”\n\nSomething about her struck me as a character that could have come straight from a Ghibli movie - it probably was her AoTTG skin more than anything (it was very unique). So I decided to turn to two of my favourite Ghibli tracks for inspiration to eventually write the full-length version of Purple Moon - One Summer’s Day and The Sixth Station, both from Spirited Away (one of my two favourite films of all time). The way Hisaishi manages to capture a sense of pensiveness in The Sixth Station in particular really stood out to me; Maya was a quiet person that always seemed like she had something underneath her quiet but cheery surface, and so it was a natural inspiration for this work. This extended version is one that I never really shared widely, and also a re-envisioning of the original 2016 track.\n\nThe name Purple Moon came largely from the fact that her aesthetic was overwhelmingly purple - apparently it was her favourite colour.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Radiance (Sapphire)",
                year: "2025",
                description: "No homage to Quindi’s themes would be complete without acknowledging the person who really started me on these themes. Sapphire was the very first friend I made on AoTTG, and by extension the first friend I made online. She is a central figure in the guild’s history; not only was she the driver behind the guild’s formation, but she was also the one that encouraged me to write theme tracks to begin with.\n\nRadiance was her track, and like Purple Moon this version is a reimagined version of the 2016 original. The center of this piece is the violin, which she was learning at the time. I remember that when I wrote the original, I never really knew what I wanted this piece to say or what it should be about, even when I showed it to her. With the gift of many years of hindsight and time, however, I think I have finally come to an answer with this reimagined version. Radiance is my way of saying thank you to Sapphire for being my friend, even though she has been gone for a long time now. Without her neither the guild nor the themes would have ever happened, let alone be here today ten years later, and I will always be grateful for it.",
                cover: "cover.jpg",
                dedication: "masterGen"
            },
            {
                group: "",
                title: "Quindi Medley II",
                year: "2025",
                description: "Writing a second Quindi medley was actually a very spontaneous decision on my part, despite the fairly gargantuan effort that went into writing a medley over 8 minutes long. There was no real reason for it; I really enjoyed writing Medley I, and I just decided that it was time to give a second one a go.\n\nThe first medley was relatively high octane, and perhaps a little rough around the edges. I had/have no problem with that - it was my first foray into writing a medley, and I did it using a format that I could easily work with. That being said, it made sense to me to make some important changes for the second time round. First, the instrumentation was expanded out to include things like strings and brass to create a richer sound. Second, the order of Quindis' themes was changed, and in many instances the sections I used from their themes were changed too. Some of these new snippets also included stylistic changes (e.g. Kai’s After Dark at the very start).",
                cover: "cover.jpg",
                dedication: "masterGen"
            }
        ]
    },
    {
        slug: "10th-anniversary",
        title: "quindecim",
        subtitle: "10th anniversary ep",
        datePublished: "2026",
        description: "Description Placeholder",
        cover: "10thAnn_logo.png",
        tracks: [
            {
                group: "",
                title: "Track 1",
                year: "2025",
                description: "Description Placeholder",
                cover: "cover.jpg",
                dedication: "chell",
            }
        ]
    },
    {
        slug: "all-there-ever-was",
        title: "All There Ever Was",
        subtitle: "Remastered Edition",
        datePublished: "2025",
        description: "Description Placeholder",
        cover: "AllThereEverWas.png",
        tracks: [
            {
                group: "",
                title: "Overture",
                year: "2021",
                description: "There’s not a whole lot to be said about this first track other than that I hope it serves as a nice introduction to the album. Overtures in classical music traditionally served as precursors to larger bodies of work, but increasingly also referred to standalone pieces that could be performed as general introductions to concerts. While Overture in this album is also meant to be a sort of thematic introduction to the album - the second half of this track is thematically the same as the album’s namesake - it is hardly the big introduction that classical or concert overtures tend to be. If anything it’s quite the opposite, but I think for that reason it serves as a fine enough introduction to the rest of this album.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Lacrimae",
                year: "2012",
                description: "I was and continue to be a bit embarrassed about including this track in this album. Lacrimae was the first work for piano that I ever wrote, and the second piece I ever composed (the first piece was worse but may end up on this site eventually). I wrote Lacrimae when I was 15 (!!) for my high school music class, which is incredibly cringe. \n\nThe word “lacrimae” means “tears” in Latin. I think I named it that because of what I was experiencing at the time - which was a bit of an up-and-down relationship with a lot of things in general. Big news for a 15-year-old, I know. \n\nThe piece heavily draws on Yiruma’s songs because I was big into Yiruma at that age. I’ve presented the original version with some very minor tweaking here, partially as a marker to show how far I’ve come as a writer - or maybe how little progress I’ve made, hahaha.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Raining Fury",
                year: "2016 (original), 2020", 
                description: "This is a solo piano arrangement of Raining Fury I. This is one of the many iterations and versions of Raining Fury that have existed over the years, but this version remains relatively faithful to the original. Having never been a very accomplished pianist myself, I’m not actually sure how playable this track is - I tried to make it at least appear and sound plausible for human hands, but I can never be fully sure. I don’t expect every work that I make to be translatable to human performers one-to-one, but the point of this album was to write for one instrument…",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Light from the Sixth Station",
                year: "2021",
                description: "The original Light from Shadow was a theme written for solo piano, and drew surprisingly strong emotional reactions from some people when I first shared it around. For that reason alone, I simply couldn’t look past including a version of this theme when putting this collection together. However, as much as I could have included the original as is, at the time I thought that it would be more meaningful to present the piece in a new light by drawing upon one of my biggest inspirations in my early days of music writing - the music of Joe Hisaishi and the Ghibli film soundtracks. Light from Shadows and many of these other current works wouldn’t exist without Joe Hisaishi’s phenomenal work. \n\nThis piece is a combination of Light from Shadow and The Sixth Station from the movie Spirited Away. Spirited Away, as I’ve described elsewhere, is one of my favourite films of all time and The Sixth Station in particular is perhaps my favourite track in the OST. This piece and its name is a combination of this phenomenal piece and Light from Shadow.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Under the Same Moon",
                year: "2018",
                description: "The name Under the Same Moon gives away a lot of what this piece is about. I have always interpreted this piece and its title as having two layers. The first layer is about a specific kind of loneliness; it is about feeling just a bit too far away from someone, and wanting to be closer to them. I think this is a feeling that many people have experience with, and if not can still instinctively relate to or understand.\n\nThe second layer, though, is (perhaps strangely) about comfort, and where I think this piece truly derives its name from. For me, there’s a small sense of comfort in knowing that even if someone is physically too far away from you, they are still ‘under the same moon’ that you are. In a way, it’s a sign that they’re not too far away. I’ve never been fully sure whether this piece really captures these two layers at the same time, but this piece is an earnest attempt at that all the same.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Ghost Heart",
                year: "2017",
                description: "If you are reading these notes in linear order, it may be obvious by now that a lot of my non-theme music is personally inspired or driven. Ghost Heart is maybe one of the best examples of this. \n\nI’m at a very different point in my life now than when Ghost Heart was written, so I’m not really afraid to reflect on how this piece came to be. Ghost Heart is fundamentally a piece about heartbreak. It was written after an important friend in Quindi left, and I lost all contact with them. They left nothing behind so I actually lost just about all trace of them too, almost as if they never existed to begin with. It took me a long time - longer than I expected - to process their departure. I can’t really articulate why, and I think it’d be foolish at best for me to try. What I do feel comfortable saying though is that Ghost Heart was a way for me to work through a lot of complex feelings. \n\nI also wrote an orchestral version of Ghost Heart, which is much longer. Perhaps I’ll expand on some of these comments more when I eventually re-share that one.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Dreams of the Stars Above",
                year: "2021",
                description: "Dreams of the Stars Above is Daisy’s theme, which is also included in The Master Collection. This track is almost a one-for-one replica of the original theme, just arranged for two hands on a single piano. Unlike some of the other arrangements on this album, this theme was already half-piano so it was fairly easy to translate into a solo piano format. The main challenge for this arrangement was trying to capture the interlocking string lines in the first half of the original piece, but I think I kept enough to retain the essence of the original.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Arashi",
                year: "2021",
                description: "Arashi, which means “storm” in Japanese, is a bit of an outlier on this album. Although there are a number of pieces that are original works not directly written for/about Quindis, most of them are still connected to either Quindi or me in some way. Arashi, however, is truly a standalone piece that has zero connection with either Quindi or me. It was the result of basically experimenting with a specific musical scale and seeing if I could come up with something interesting.\n\nThis piece is sort of a counterpart to another piece I wrote in 2018 called Nagare [Waves], which I also wrote for the hell of it. Both Arashi and Nagare feature Japanese-origin names, but I’m not sure I could really say they were inspired by Japanese music in any way per se. They were just really fun experiments.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Rainbow Connection",
                year: "2021 (original), 2025",
                description: "I didn’t grow up with The Muppets, so I didn’t discover this song until much later in life. I’m not even sure how I discovered it - I have a feeling I found a cover version first before I even knew it was from The Muppets - but I remember loving the track instantly. I particularly love the line “Who said that every wish / Would be heard and answered / When wished on the morning star? - I just think it’s a pretty beautiful line.\n\nThe original 2021 version of this album had a very different version of this track. I hated what I did with it - it really trudged along in an ugly way and I skipped the entire second verse for some reason, which includes the very lines described above! So when I came around to making the Remastered edition I completely rearranged this piece from scratch. I’m much happier with this version.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Komorebi",
                year: "2018 (original)",
                description: "Komorebi is Sol’s theme. This version is a fairly faithful arrangement of the original track and unfolds in much the same way. I was a bit surprised at how well it translated to solo piano, especially because the track was originally built using layers and layers of different sounds and instruments. I still really like this theme, though, and always enjoy coming back to it in many forms - there’s not much else I can add here.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "A Sunset We Shared",
                year: "2017",
                description: "In some ways, A Sunset We Shared is a spiritual prequel to Ghost Heart. This is another track where the title is fairly literal. The inspiration for this track was a moment where I was sitting with an old friend (the same one in Ghost Heart) and we just… talked for hours and hours and hours, about anything and everything. We were in slightly different timezones, but we would have started in the evening (i.e. when the sun was setting for them) and finished well into the night.\n\nNow, of course, I look on those memories quite differently. In one sense, the track is literally about just sitting together and sharing a sunset. Above the literal sense, I think the track is about bittersweet reminiscence: reminiscing on things that were, and also things that will never eventuate.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Among the Stars",
                year: "2016 (original) revised 2021", 
                description: "Although I didn’t originally intend this, I think Among the Stars essentially sits as an epilogue or conclusion to Ghost Heart. Yes, it was another piece that was originally personally motivated, and yes the original was also a product of its time - two overarching concepts that I think pervade half of this album, maybe against my better judgement.\n\nWhat makes this specific track different from some of the others though is the fact that I decided to revise it. This piece has gone by a number of different names since it was originally written in 2016. It’s also undergone a number of revisions and edits as my feelings about this piece (and other things) have changed over time. I didn’t want all of my non-Quindi writing in 2016-2017 to sit in the same emotional black hole that spawned Ghost Heart, and this piece just felt right to revisit. So I deliberately rewrote this piece in 2021 to let it tell a new story from the original, with the most significant edit being the key change near the end of the track (4:00).\n\nThe name Among the Stars is a new name for the piece. As described above, Ghost Heart is about heartbreak. In contrast, Among the Stars is now about letting go; the story in the piece ends in closure, and releasing the heartbreak ‘among the stars’ where it belongs.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Palm of a Tiny Hand (Clannad)",
                year: "2020",
                description: "I’m not embarrassed to admit that Clannad is one of the only shows that has ever made me cry - and not only did I cry but I bawled. Granted, I watched it while I was in a bit of a touchy state but Clannad humbled me real quick in a way that no show had ever done (and still hasn’t really, with one exception).\n\nThe flagship song and central musical theme of Clannad is Dango Daikazoku. Chiisana Te No Hira (小さなてのひら), which translates to Palm of a Tiny Hand, is a variant on Dango Daikazoku that appears in one specific part of Clannad. I won’t divulge any spoliers from the story - this is one series that you really do have to go into completely blind - but this track appears at such a pivotal moment that it left a really strong impression on me. This piece is an arrangement of that song for solo piano and cello, an instrument that I adore the sound of.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Celestial Destiny/Ascension (Genshin)",
                year: "2021",
                description: "I have been playing Genshin for 5 years and still play daily. One of the reasons I love this game is the OST, which to me is nothing short of incredible. I am constantly floored by what Hoyo-Mix create and can only dream of writing music as impressive as the Genshin OST. I think the main themes for Natlan, Nod-Krai and Snezhnaya are perfect examples of how magical the Genshin soundtrack is as a whole. Hoyoverse really can be a music company with a game on the side.\n\nCelestial Destiny is a specific arrangement of the Main Theme that plays on the loading screen. It featured once in the music event in Version 1.4, which was shortly after I started playing the game in early 2021. I’m not actually sure what led me to try and merge this track with Ascension, but I remember it being a fun project. Sometimes, these spur-of-the-moment ideas lead me down some delightful pathways.",
                cover: "cover.jpg",
                dedication: "",
            },
            {
                group: "",
                title: "Among the Stars (Expanded)",
                year: "2025",
                description: "This version of Among the Stars features a string quartet with the piano. The cello gets special love in this version - I wanted to create a tender duet moment between the cello and the piano in the mid-section when it comes in as a solo.\n\nFor the longest time I didn’t want to listen to the original version of this track (i.e. before it became Among the Stars) because I actually found it kind of unbearable to listen to. It was only really during the making of the original All There Ever Was album back in 2021 that I had the stomach to face this piece again in its entirety. It took a bit of time for me to become comfortable even working with this piece again, so it’s somewhat funny in hindsight that there are now two versions of this song.",
                cover: "cover.jpg",
                dedication: "",
            }
        ]
    }
    
]