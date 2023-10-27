type Options = {
  callback?:() => void;
  props: Record<string>
}

interface window {
  plausible: (event: "add_fox" | "remove_fox", options?: Options) => void;
}