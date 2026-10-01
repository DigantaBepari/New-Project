# ByteSpace rebuild

Rebuild the reference project in `my-app`, preserving the existing header,
hero, partner logos, and footer. Each row is one pull request targeting
`production`. Merge the current PR before starting the next one.

| Part | Scope | Status |
| --- | --- | --- |
| 1 | Featured homepage courses, shared course data, six thumbnails | Ready for review |
| 2 | Learning paths section and images | Pending |
| 3 | Professional growth section and images | Pending |
| 4 | Creator section and call to action | Pending |
| 5 | Testimonials section and portraits | Pending |
| 6 | Course catalog, filtering, sorting, and pagination | Pending |
| 7 | Course detail routes, modules, and reviews | Pending |
| 8 | Login page and shared authentication UI | Pending |
| 9 | Signup page and validation | Pending |
| 10 | Error pages, scroll animations, and final integration checks | Pending |

Part 1 preserves the reference's course links. `/courses` will be implemented
in part 6 and `/courses/[id]` in part 7. Category chips currently match the
reference's static presentation. Scroll animations are deferred to part 10.

Only assets used by the current part belong in its commit. Other images
already present locally will be added with their corresponding sections.

After each merge, say `next` to continue with the next part.
