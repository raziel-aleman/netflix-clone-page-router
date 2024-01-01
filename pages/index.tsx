import BillBoard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import userCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  //const { data: user } = userCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <div>
      {/* <h1 className="text-4xl text-green-500">Netflix Clone</h1>
            <p className="text-white">Logged in as: {user?.email}</p>
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>Sign out</button> */}
      <InfoModal
        visible={isOpen}
        onClose={closeModal}
      />
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList
          title="Trending Now"
          data={movies}
        />
        <MovieList
          title="My List"
          data={favorites}
        />
      </div>
    </div>
  );
}
