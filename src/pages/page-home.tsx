import Container from "../components/container";
import AlbumsFilter from "../components/album/albums-filter";
import useAlbums from "../hooks/use-albums";
import PhotosList from "../components/photo/photos-list";
import usePhotos from "../hooks/use-photos";

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();
  const { photos, isLoadingPhotos } = usePhotos();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />

      <PhotosList photos={photos} loading={isLoadingPhotos} />
    </Container>
  );
}