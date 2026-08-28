import React from "react";
import Navbar from "./../../componants/WebsiteNavbar.jsx";
import StoryNetwork from "../../componants/hdg/StoryNetwork.jsx";
import network_data from "../../data/blogposts/hdg/network_data.json";
import stories_by_year_data from "../../data/blogposts/hdg/stories_by_year.json";
import StoriesByYearGraph from "../../componants/hdg/StoriesByYearGraph.jsx";
import WordcountByAuthorGraph from "../../componants/hdg/WordcountByAuthorGraph.jsx";
import author_wordcount_data from "../../data/blogposts/hdg/author_wordcounts.json";
import author_share_of_kudos_data from "../../data/blogposts/hdg/top_authors_by_kudos.json";
import KudosByAuthor from "../../componants/hdg/KudosByAuthor.jsx";
import NormalizedRecs from "../../componants/hdg/Normalizedrecs.jsx";
import normalized_recs from "../../data/blogposts/hdg/normalized_recs.json";
import "../../css/BlogPosts/hdg.css";

export default function Hdg() {
  return (
    <>
      <Navbar />
      <div className="article-wrapper">
        <h1 className="title">Canon in the Anarchy</h1>
        <h2 id="introduction">What is HDG?</h2>
        <p>
          Human Domestication Guide is an 18+ story written by user GlitchyRobot
          on ReadOnlyMind about a group of aliens invading Earth in the 26th
          century.
        </p>

        <p>
          This relatively short story (only 26k words) spawned a community of
          writers in the same universe that rapidly grew.
        </p>
        <StoriesByYearGraph data={stories_by_year_data} />

        <p>
          Other works quickly outpaced the original in both size and scope.
          Currently, the words written by the original author are far outweighed
          by the contributions of others. This observation is not intended to
          minimize the influence of the original author, but to draw attention
          to the collaborative nature of the development of this setting.
          <br />
        </p>
        <WordcountByAuthorGraph data={author_wordcount_data} />
        <p>
          While it is true that works in the HDG setting are fanfiction, much of
          the setting has been cooperatively developed by a group of authors,
          rather than handed down by the original.
          <br />
          <br />
          Additionally, readers new to this space have not necessarily read the
          original work. Works often comment about whether they write with the
          intention of being intelligible to readers new to the setting.
        </p>
        <h2 id="previous-attempts-at-canon">Previous attempts at Canon</h2>
        <p>
          Early on in the History of HDG, the was an attempt to create a canon
          by creating a list of "verified canon" works. This ultimately failed
          because of the number of authors writing in the setting.
          <br />
          <br />
          As explained{" "}
          <a href="https://humandomestication.guide/blog/CanonIsDead">
            on the HDG wiki
          </a>
          ,
        </p>
        <blockquote>
          Even beyond the difficulty of reading dozens of new stories every
          month, the very concept of a cohesive “canon”, where all the stories
          are being written individually aware of each other and the authors are
          all closely collaborating their ideas to work together, is an
          all-but-impossible task in a community of dozens of writers, much less
          the hundreds who have written in the setting in the past three years.
        </blockquote>
        <p>
          Instead of a solid division between canon and non-canon works, seven
          stories from seven different authors were chosen as ’foundational’
          works in the setting. In addition, guiding principles were developed
          to govern the tone and rules of the setting.
          <br />
          <br />
          While these guidelines exist, very little can or does enforce them.
          Audiences do not necessarily come to the setting with the same
          preconceptions, and nothing prevents an author from posting a work in
          this setting that does not follow them.
        </p>
        <p>
          Nor is there a single author with an overwhelming influence over the
          community. Looking at the most liked authors in the community, there
          are certainly some authors with more popularity, but readership is
          fairly divided among them
        </p>
        <KudosByAuthor data={author_share_of_kudos_data} />
        <br />
        <p>
          Even if there were a perfect metric for determining which stories were
          canon or not, there is not central authority to enforce it. The
          universe is grown through the cooperation of authors working together
          out of shared inspiration from a setting, not a writers room who must
          pass a script past a studio.
          <br />
          <br />
          Any interesting metric for canon must then be descriptive rather than
          prescriptive-it must describe the stories that have become influential
          in the setting, rather be a rubric for determining whether a story is
          canon
          <br />
          <br />
          Because this universe was developed collaboratively, authors
          frequently recommend other stories in their works in the notes at the
          end of each chapter.
        </p>
        <p>
          By aggregating these recommendations, we could not only visualize the
          influence that stories have within the world, but create a map of the
          influence of HDG stories.
        </p>
        <h2 id="methodology">Methodology</h2>
        <p>
          2570 stories were downloaded from Archiveofourown.com (A03), and 113
          from Readonlymind.com (ROM) for a total of 2683 stories.
          <br />
          <br />
          Stories were collated if they shared both the same author and title
          name, to account for stories that were originally posted on ROM, but
          later copied to AO3. If a story appeared on both ROM and AO3, only
          statistics from A03 were counted. Since ROM no longer accepts HDG
          stories, it seems likely simply adding the statistics would lead to
          slight overcounting. Since the vast majority of stories are from AO3,
          we elected to simply use the larger statistic.
          <br />
          <br />
          All stories were analyzed for any link leading to another story. This
          was interpreted to mean that one story recommended another story. In
          addition, the text each story were analyzed for all other story names
          in the database within 50 characters of the author name of that story.
          <br />
          <br />
          These recommendations were filtered to exclude self-promotion. In the
          case of multiple authors, only stories which none of the original
          authors wrote were counted. Using this, we can create a network of
          between stories. The size of the nodes is determined by the number of
          recommendations a story has recieved, regardless of whether that story
          has been recommended. I encourage you to take a minute and click on
          the various nodes to explore.
        </p>
        <StoryNetwork data={network_data} />
        <h2 id="limitations-of-recommendations">
          Limitations of Recommendations
        </h2>
        <p>
          Exploring the network of recommendation, we can see several different
          styles of recommendations. The most recommended story by far is the
          original story. However, when we filter to show only stories which are
          recommended by another Author, many of those recommendations go away.
          Similarly, relatively few of the other popular stories recommend it.
          <br />
          <br />
          We can understand these recommenations more as a genera marker, than a
          recommendation. Several of these smaller stories only include a single
          recommendation to clarify that they’re writing.
          <br />
          <br />
          We can also see a large disparity in the number of recommendations
          give. Putting aside the limitations that Recommendations tend to only
          work one way (older stories recommending newer ones), different
          authors tend to give recommendations at very different numbers.
          <br />
          <br />
          Sheepwave, and Kagan are both prominent authors, but the former
          recommends much more liberally than the latter.
          <br />
        </p>
        <h2 id="how-does-recommendations-stack-up-against-kudos">
          How does recommendations stack up against Kudos?
        </h2>
        <p>
          We could try to measure how accurate number of recommendations is as a
          measure of community influence by comparing it to the number of kudos
          a story gets. Because recommendations are much more difficult to give
          than kudos, we would expect far fewer of them. However, by normalizing
          them on a scale of 0 to 1 where 1 is the most kudos or recommendations
          and zero is the least.
          <br />
          <br />
        </p>
        <NormalizedRecs data={normalized_recs} />   
        <p>
          <br />
          Looking at the data, they’re correlated, with a mean
          square error of 0.00106.
        </p>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          In this article, we’ve created a novel metric for stories in the HDG
          universe, and compared it to a known metric. We find that author
          recommendations are a good measure for the influence of stories in the
          HDG universe.
          <br />
        </p>
      </div>
    </>
  );
}
