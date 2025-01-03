import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: {
        _id: 1,
        name: "kingdavid"
      },
      _id: 1,
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1706545602642-fa0a6c3a540a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Travel",
      title: "Traveling the world",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With, Entrepreneur
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in virtual,
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" ` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType, index: number) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )
          }
        </ul>
      </section>
    </>
  );
};

export default Home;