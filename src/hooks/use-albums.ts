
import { useQuery } from "@tanstack/react-query";
import type { Album } from "../types/album";
import { fetcher } from "../helpers/api";

export default function useAlbums() {
  const { data, isLoading } = useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn: () => fetcher("/albums"),
  });

  return {
    albums: data || [],
    isLoadingAlbums: isLoading,
  };
}