<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Style rendered pages and the shared Button with semantic classes in plain global CSS; the site no longer depends on Tailwind-generated utilities for its visible interface.
- Reference uploaded gallery media through CDN asset pointers and serve simulation videos as fast-start H.264 MP4 for browser playback.
