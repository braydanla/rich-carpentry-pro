import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const blogPostsData: Record<string, BlogPostData> = {
  "choosing-right-crown-molding": {
    slug: "choosing-right-crown-molding",
    title: "How to Choose the Right Crown Molding for Your Home",
    metaDescription: "Expert guide on selecting crown molding for your Guelph home. Learn about styles, sizes, and materials from experienced finish carpenters.",
    author: "Braydan LA",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Tips & Guides",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          There's something about crown molding that just ties a room together. Maybe it's the way it softens that hard line where your walls meet the ceiling, or maybe it's how it catches the light just right. Either way, if you're considering adding crown molding to your Guelph home, you've got some choices to make—and they matter more than you might think.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Understanding Crown Molding Profiles</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Walk into any building supply store in Kitchener-Waterloo and you'll see dozens of crown molding options. It can feel overwhelming, but here's the thing: they all fall into a few basic categories. Traditional profiles have more curves and ornate details—think Victorian homes or formal dining rooms. Contemporary profiles are simpler, with cleaner lines that work well in modern spaces.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We've installed crown in everything from century homes in Downtown Guelph to new builds in Doon South. The profile you choose should complement your home's existing architecture, not fight against it. A highly ornate crown in a minimalist modern home looks just as out of place as a stark, simple crown in a heritage Victorian.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Size Matters: Finding the Right Proportions</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Here's where a lot of homeowners go wrong. They pick a profile they love without considering how it'll actually look in their space. Crown molding that's too small gets lost—you barely notice it's there. Crown that's too large can make a room feel cramped and top-heavy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The general rule we follow: standard 8-foot ceilings typically look best with 3 to 5-inch crown. Got 9-foot ceilings? You can go up to 6 or 7 inches. Those lucky folks with 10-foot ceilings or higher can handle 7 inches or more. But these are starting points, not hard rules. Room size, window placement, and existing trim all factor into the final decision.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Material Choices: Wood, MDF, or Composite?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Solid wood crown is the gold standard. It takes paint and stain beautifully, and there's something about the weight and feel of real wood that's hard to replicate. Oak, poplar, and pine are common choices. For stain-grade work, we typically recommend oak or a species that matches your existing trim.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          MDF (medium-density fiberboard) is a solid alternative for painted installations. It's stable, won't warp like wood can, and costs less. The catch? It doesn't hold up to moisture, so we don't recommend it for bathrooms or kitchens with poor ventilation.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Composite and PVC options have come a long way. They're great for high-moisture areas and provide consistent results. They cost more upfront but can save headaches down the road in the right applications.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Consider Your Existing Trim</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Here's something that often gets overlooked: your crown molding should relate to your baseboards and door casings. We're not saying everything needs to match exactly, but there should be a conversation between the elements. If you've got 5-inch baseboards with a simple profile, jumping to an 8-inch ornate crown creates visual tension.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          When we do consultations throughout the Guelph area, we always look at the complete picture. Sometimes the best solution is updating all the trim together to create a cohesive look. Other times, it's about finding crown that bridges the gap between what's already there.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">The Bottom Line</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Choosing crown molding isn't just about picking something that looks nice in the store. It's about understanding how that profile will interact with your specific space, your ceiling height, your existing trim, and the overall feel you're going for.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The best advice we can give? Before committing, get a sample or two and hold them up in your actual room. See how the shadows fall. Look at it from different angles and in different lighting. Crown molding is one of those details that, when done right, you might not consciously notice—but you'll definitely feel the difference.
        </p>
      </>
    ),
  },

  "custom-cabinetry-vs-stock": {
    slug: "custom-cabinetry-vs-stock",
    title: "Custom Cabinetry vs Stock Cabinets: Which Is Right for You?",
    metaDescription: "Compare custom and stock cabinets for your kitchen or bathroom renovation. Honest advice from Guelph finish carpentry professionals.",
    author: "Braydan LA",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Comparisons",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          If you're planning a kitchen or bathroom renovation, you've probably already discovered that cabinets will eat up a significant chunk of your budget. Walk into any showroom, and you'll hear about "custom," "semi-custom," and "stock" options. But what do these terms actually mean for your project and your wallet?
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Stock Cabinets: The Ready-Made Solution</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Stock cabinets are exactly what they sound like—pre-manufactured boxes in standard sizes, ready to ship. Most come in 3-inch width increments (12, 15, 18, 21 inches and so on). They're built in large quantities, which keeps costs down.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The advantage? Speed and affordability. You can often have stock cabinets delivered within a week or two. Prices start considerably lower than custom options. For a straightforward kitchen in a newer Waterloo home with standard dimensions, stock cabinets might work perfectly.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The downside is flexibility—or lack of it. Standard sizes don't always fit standard spaces, especially in older Guelph homes where walls have settled and nothing is quite square. You might end up with filler strips to close gaps, or cabinets that don't maximize every inch of available space.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Custom Cabinets: Built for Your Space</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Custom cabinets are built from scratch specifically for your kitchen. Every dimension is tailored to your space. Want a 17-inch-wide cabinet to fill that awkward corner perfectly? No problem. Need extra-deep drawers for your baking sheets? Done.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Beyond sizing, custom work opens up possibilities that stock cabinets simply can't offer. Unusual wood species, specialized storage solutions, integrated appliance garages, pull-out spice racks sized for your collection—the options are limited only by imagination and budget.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We've built custom cabinets for homeowners across Kitchener-Waterloo who wanted something that truly fit their lifestyle. A serious home baker with specific pan storage needs. A collector who wanted display cases integrated into their kitchen design. A family who needed kid-friendly lower cabinets with extra-durable finishes.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">The Semi-Custom Middle Ground</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Semi-custom cabinets offer a compromise. They start with standard box sizes but allow modifications—different door styles, additional drawers, varied interior configurations. Lead times are typically 4-8 weeks, and pricing falls between stock and full custom.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For many homeowners, semi-custom hits the sweet spot. You get more flexibility than stock without the full investment of custom work. It's worth exploring if your space is fairly standard but you want more design options.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Quality Considerations</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Here's something important: custom doesn't automatically mean better quality, and stock doesn't automatically mean inferior. We've seen beautifully made stock cabinets and poorly constructed "custom" work.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          What to look for regardless of category: plywood box construction (not particleboard), dovetail drawer joints, soft-close hinges and drawer slides, durable finishes. Ask questions. Look at samples. Don't assume price equals quality.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Real-World Budget Considerations</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Let's be honest about numbers. For a typical Guelph kitchen (10x12 feet, L-shaped layout), stock cabinets might run $5,000-$10,000. Semi-custom could be $12,000-$25,000. Full custom work starts around $25,000 and goes up from there.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          These are rough ranges—actual costs depend on door style, finish, hardware, and features. But they give you a starting point for planning.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Making the Decision</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Consider these factors: How long do you plan to stay in your home? A 20-year kitchen calls for different choices than a 5-year flip. How important is maximizing every inch of space? Stock cabinets in an older home often leave gaps that custom work would eliminate. What's your budget reality? It's better to get quality stock cabinets than cut corners on custom work.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          There's no universally right answer. We've helped homeowners choose all three options, depending on their specific situations. The key is understanding what you're getting at each price point and making an informed decision based on your priorities.
        </p>
      </>
    ),
  },

  "wood-species-guide": {
    slug: "wood-species-guide",
    title: "A Complete Guide to Wood Species for Interior Trim",
    metaDescription: "Comprehensive guide to wood species for interior trim work. Learn about oak, maple, poplar, pine, and more from Guelph carpentry experts.",
    author: "Braydan LA",
    date: "2024-12-05",
    readTime: "8 min read",
    category: "Materials",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          The wood you choose for your trim work affects everything—how the finished product looks, how much it costs, how easy it is to work with, and how it'll hold up over the years. After installing trim in hundreds of homes across Guelph, Kitchener, and Waterloo, we've developed strong opinions about different species. Here's what we've learned.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Oak: The Classic Choice</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Red oak and white oak are the traditional go-to species for stain-grade trim work. The grain is distinctive—you know it when you see it. Oak takes stain well, though it can be tricky to get an even finish due to the open grain. Most stained trim you see in older Ontario homes is oak.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          White oak is denser and more rot-resistant than red oak. It also has a tighter grain pattern and takes a slightly different stain. If you're matching existing trim in an older Guelph home, pay attention to which type you're dealing with—the difference matters.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Oak is a hardwood, which means it's durable but also harder to cut and nail. We typically pre-drill when working with oak to prevent splitting. It's mid-range on price and widely available at local suppliers.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Maple: Smooth and Contemporary</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Maple has a tight, fine grain that creates a smooth, contemporary look. It's extremely hard—actually harder than oak—which makes it very durable but challenging to work with. The wood is naturally light-colored, almost cream-toned.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          One thing to know about maple: it can be blotchy when stained. The grain absorbs stain unevenly, creating a mottled appearance. If you want stained maple trim, we recommend gel stains or a pre-stain conditioner. Many people choose to clear-coat maple instead, letting the natural color shine.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Maple costs a bit more than oak and is less commonly stocked at local suppliers, so it may need to be ordered.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Poplar: The Paint-Grade Workhorse</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you're planning to paint your trim, poplar is probably your best bet. It's a hardwood that's softer than oak or maple, making it easier to cut, nail, and sand. The grain is subtle and disappears completely under paint.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Poplar is affordable and readily available throughout the Waterloo region. It takes paint beautifully and provides a smooth, uniform finish. We use poplar for the majority of our painted trim installations.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The natural color of poplar can be greenish or have purple streaks, which is why it's rarely used for stain-grade work. But if you're painting, none of that matters.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Pine: Budget-Friendly with Character</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Pine is the most economical option for trim work. It's a softwood, which means it's easy to work with but also easier to dent and damage. The grain is distinctive with visible knots (unless you specifically buy "clear pine," which costs more).
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For rustic or cottage-style homes, pine can be perfect. It stains well and has a warm, casual feel. We often recommend pine for basements, cottages, or situations where budget is the primary concern.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you're painting pine, be aware that the knots can bleed through paint over time. Using a shellac-based primer on knots prevents this issue.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">MDF: The Non-Wood Option</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Technically not a wood species, but MDF (medium-density fiberboard) deserves mention because it's so commonly used for painted trim. It's made from wood fibers and resin pressed into boards.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          MDF provides a perfectly smooth surface that paints beautifully—no grain to raise, no knots to bleed. It's dimensionally stable, meaning it won't warp or twist like solid wood can. And it's affordable.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The downsides: MDF is heavy, it doesn't hold nails as well as solid wood, and it absolutely cannot get wet. We avoid MDF in bathrooms and anywhere moisture is a concern. It also dulls tools faster than natural wood.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Less Common Options</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Cherry, walnut, and ash are beautiful choices for stain-grade work, though they're more expensive and often need to be special-ordered. Cherry darkens naturally over time to a rich reddish-brown. Walnut has deep chocolate tones and dramatic grain. Ash has a grain similar to oak but with a lighter overall appearance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For truly custom work, exotic species are available, but costs escalate quickly and availability can be challenging.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Making Your Choice</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Start with the finish: stain or paint? If paint, poplar or MDF are your best options. If stain, consider oak for traditional looks, maple for contemporary, or pine for rustic/casual.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Factor in your budget, durability needs, and whether you're matching existing trim. And when in doubt, ask to see samples in person. Photos can't capture how different species actually look and feel in your hand.
        </p>
      </>
    ),
  },

  "built-in-design-ideas": {
    slug: "built-in-design-ideas",
    title: "10 Built-In Ideas to Maximize Your Space",
    metaDescription: "Creative built-in ideas for your Guelph home. From window seats to home offices, discover how custom carpentry can maximize your living space.",
    author: "Braydan LA",
    date: "2024-11-28",
    readTime: "6 min read",
    category: "Inspiration",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Built-ins are one of those things that can completely transform how a room functions. Unlike furniture you buy, built-ins are designed specifically for your space—every awkward angle, every unused corner becomes an opportunity. Here are ten ideas we've brought to life in homes across Guelph and Kitchener-Waterloo.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">1. The Window Seat with Hidden Storage</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A bay window or even a flat window with enough depth is perfect for a built-in seat. Add a hinged top or drawers underneath, and suddenly you've got a cozy reading nook plus storage for blankets, games, or seasonal items. We built one in a Rockwood home where the window seat now holds all the kids' outdoor gear—out of sight but easy to grab.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">2. Floor-to-Ceiling Bookshelves</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          There's something about walls of books that makes a room feel complete. Built-in bookshelves can wrap around doorways, turn corners, and include features that freestanding units can't—like integrated lighting, a rolling ladder, or display niches for art. They add architectural interest even when not fully loaded with books.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">3. The Home Office Nook</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Remote work isn't going anywhere, and not everyone has a spare room for an office. A built-in desk in a living room corner, under the stairs, or carved into a closet can create a functional workspace that closes up when you're done. We've designed these with fold-down desks, pocket doors, and integrated cable management.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">4. Mudroom Lockers</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Ontario winters demand a proper landing zone. Built-in mudroom lockers give everyone in the family their own spot for coats, boots, backpacks, and sports equipment. Include hooks at kid-height, a bench for pulling on boots, and cubbies or drawers below. The difference in how a family functions during the morning rush is remarkable.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">5. Entertainment Center Built-Ins</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The days of giant entertainment centers from furniture stores are fading. A custom built-in around your TV can include space for components, hidden wire management, adjustable shelving for speakers, and closed cabinets for the stuff you don't want on display. We can design around any TV size and accommodate future upgrades.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">6. Bedroom Wardrobes</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Not every home has great closet space, especially older homes in Guelph's heritage neighborhoods. Built-in wardrobes on either side of a bed create a finished look while adding serious storage. Include drawers, hanging space, and a bridge above the headboard for a cohesive bedroom suite.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">7. Under-Stair Storage</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          That triangle of space under your stairs is usually wasted. We've turned these into pull-out pantry storage, wine cellars, pet feeding stations, and even small reading nooks for kids. The options depend on how your stairs are constructed, but there's almost always an opportunity to reclaim this space.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">8. Bathroom Linen Cabinets</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A floor-to-ceiling linen cabinet between wall studs takes up minimal floor space while providing substantial storage. Add glass doors on upper sections for display, solid doors below for less-attractive items. In a bathroom without a closet, this can be a game-changer.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">9. Dining Room Buffet Built-Ins</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A built-in buffet or sideboard in a dining room provides serving space, storage for china and linens, and architectural interest. Include a countertop for laying out food during gatherings, drawers for flatware, and cabinets for rarely-used serving pieces. Upper glass-front cabinets can display family heirlooms.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">10. Hallway Millwork</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Long hallways often feel like wasted space. Built-in niches, shallow display shelves, or a hall tree near the entry add function and visual interest. Even adding millwork details like wainscoting or picture frame molding transforms a pass-through space into something worth noticing.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Getting Started</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The best built-in projects start with understanding how you actually use your space. What frustrates you about your current storage? Where do things pile up? What would make daily life smoother? Once we understand the problems, designing solutions becomes the fun part.
        </p>
      </>
    ),
  },

  "preparing-for-carpentry-project": {
    slug: "preparing-for-carpentry-project",
    title: "How to Prepare Your Home for a Finish Carpentry Project",
    metaDescription: "Prepare your home for finish carpentry installation. Practical tips from Guelph carpenters to ensure a smooth project experience.",
    author: "Braydan LA",
    date: "2024-11-20",
    readTime: "4 min read",
    category: "Preparation",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You've hired a finish carpenter, picked out your materials, and scheduled the work. Now what? A little preparation on your end can make the difference between a smooth project and a stressful one. Here's what we recommend to homeowners before we arrive with our tools.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Clear the Work Area</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This sounds obvious, but it's worth emphasizing. Move furniture away from the walls where trim is being installed—we need at least 4-5 feet of clearance to work comfortably. Take down curtains, artwork, and anything breakable in the area. If we're working in multiple rooms, clearing them all before we start saves time.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For built-in projects, the entire room should be cleared. We need to bring in materials, set up sawhorses, and move around freely. The emptier the space, the faster and cleaner the work goes.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Think About Dust Control</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Finish carpentry generates sawdust. We do our best to minimize it—cutting outside when possible, using dust collection on our tools—but some dust is inevitable. If you have a whole-house vacuum system, let us know where to connect. If you're concerned about dust spreading, plastic sheeting over doorways helps.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Consider covering furniture in adjacent rooms, especially upholstered pieces. Fine sawdust has a way of traveling further than you'd expect.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Make Materials Accessible</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If materials are being delivered before we arrive, try to have them stored in or near the work area. Trim boards, especially long ones, need to be laid flat in a climate-controlled space to acclimate. Garages work if they're not too damp or cold.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If we're bringing materials, make sure there's a clear path from where we'll park to the work area. Doorways should be unlocked and wide enough for long trim pieces.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Communicate About Your Schedule</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Let us know if there are times we need to avoid certain areas—maybe the home office is in use for video calls on Tuesday mornings, or the baby naps after lunch. We can usually plan our noisiest work around your schedule if we know in advance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Also helpful: letting us know about parking, where to put our tools if we're working across multiple days, and whether you have pets that need to be kept away from the work area.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Pets and Kids</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We love meeting your dogs and cats, but work sites can be dangerous for curious pets. Sharp tools, small nails, and sawdust aren't pet-friendly. Having a plan to keep them contained during the workday makes things safer and lets us focus on the job.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Same goes for young children. Our tools aren't toys, and even a moment's distraction can be dangerous for everyone.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Paint Decisions</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If your trim is being painted, decide on the color before installation. We can install trim with just primer, and you can paint later. Or, if you prefer, we can paint before installation (which gives a cleaner finish but costs more). Either way, have the paint ready if you want us to paint.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">The Final Walkthrough</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Plan to be available—or have someone available—when we finish. A walkthrough while we're still on site lets us address any concerns immediately. It's much easier to fix something or answer questions while all our tools are set up than to come back later.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Preparation might seem like extra work, but it pays off in smoother installations and better results. When we can focus on the craftsmanship instead of moving furniture, everyone wins.
        </p>
      </>
    ),
  },

  "trim-maintenance-tips": {
    slug: "trim-maintenance-tips",
    title: "Maintaining Your Wood Trim: Tips for Long-Lasting Beauty",
    metaDescription: "Keep your wood trim looking beautiful with expert maintenance tips from Guelph finish carpenters. Simple care for lasting results.",
    author: "Braydan LA",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Maintenance",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Quality trim work should last for decades. But like anything in your home, a little regular maintenance goes a long way. Here's how to keep your crown molding, baseboards, door casings, and built-ins looking their best year after year.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Regular Dusting</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This is the simplest thing you can do, and it makes a real difference. Dust accumulates on horizontal surfaces—the tops of baseboards, the ledges of crown molding, the shelves of built-ins. A quick pass with a microfiber cloth or the brush attachment on your vacuum every week or two prevents buildup.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Neglected dust attracts moisture and can actually become sticky over time, making it harder to remove and potentially damaging finishes.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Cleaning Painted Trim</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Painted trim can be cleaned with a damp cloth and mild soap—nothing fancy. For stubborn marks, a melamine foam eraser (like a Magic Eraser) works wonders, but use it gently. These erasers are slightly abrasive and can dull the sheen if you scrub too hard.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Baseboards take the most abuse, especially in high-traffic areas. Scuff marks from shoes and vacuum cleaners are normal. A damp cloth removes most of them. For tough marks, a small amount of rubbing alcohol on a cloth usually does the trick.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Caring for Stained and Clear-Coated Trim</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Stained trim needs a bit more care than painted. Avoid excess moisture—never use a soaking wet cloth. For regular cleaning, a lightly dampened cloth followed by a dry one works best.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Over time, clear finishes can develop a haze or start to look dull. A quality furniture polish (not the spray-can silicone kind) applied once or twice a year can help maintain luster. For more serious wear, the trim might eventually need to be re-coated—but that's typically a once-every-decade or two situation.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Dealing with Gaps and Cracks</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Wood moves with changes in humidity. In Ontario, where we go from humid summers to dry, heated winters, trim gaps are common. A small gap opening at a mitre joint in January might close completely by July. This is normal.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If gaps are bothering you, the best time to caulk or fill them is in spring or fall when indoor humidity is moderate. Filling during winter often results in excess caulk squeezing out when the gap closes in summer.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Touch-Up Painting</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Keep some of your trim paint for touch-ups. Store it properly—upside down to seal the lid—and it should last for years. Small nicks and scratches can be dabbed with a small brush. For larger areas, feather the edges to blend with the existing paint.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you're touching up and the color doesn't match, the original paint may have yellowed or the touch-up paint may have separated. Stir thoroughly and test in an inconspicuous spot first.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Preventing Damage</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The best maintenance is prevention. Use door stops to prevent doorknobs from hitting walls and trim. Be careful with vacuum cleaners around baseboards—the hard plastic can chip paint. Move furniture carefully, especially near corners where trim is vulnerable.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          In humid areas like bathrooms, ensure proper ventilation. Excessive moisture can cause paint to peel and wood to swell or warp over time.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">When to Call a Professional</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Most trim maintenance is simple DIY territory. But some situations call for professional help: significant water damage, extensive cracking or peeling finishes, loose or separating joints, or trim that's actually pulling away from the wall. These issues usually indicate underlying problems that need proper attention.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          With reasonable care, quality trim work will serve your home beautifully for generations. It's one of those investments that, when maintained, just keeps giving back.
        </p>
      </>
    ),
  },
};

// Related posts helper
const getRelatedPosts = (currentSlug: string) => {
  const allSlugs = Object.keys(blogPostsData);
  return allSlugs.filter((slug) => slug !== currentSlug).slice(0, 3);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Live Rich Finish Carpentry",
      logo: {
        "@type": "ImageObject",
        url: "https://liverichcarpentry.com/logo-gold.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://liverichcarpentry.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Live Rich Finish Carpentry Blog`}
        description={post.metaDescription}
        keywords={`finish carpentry, ${post.category.toLowerCase()}, Guelph carpentry, Kitchener Waterloo woodworking, ${post.title.toLowerCase()}`}
        canonicalUrl={`https://liverichcarpentry.com/blog/${post.slug}`}
        ogImage="https://liverichcarpentry.com/og-image.jpg"
        structuredData={structuredData}
      />
      <Layout>
        <article className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Blog</span>
            </Link>

            {/* Article Header */}
            <header className="max-w-3xl mb-12">
              <div className="inline-flex mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="max-w-3xl">
              <div className="prose prose-lg prose-invert max-w-none">
                {post.content}
              </div>

              {/* CTA Section */}
              <div className="mt-16 glass-card p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Whether you're envisioning custom crown molding, built-in cabinetry, 
                  or complete trim work, we'd love to hear about your project.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://calendly.com/sean_golley/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <section className="mt-24">
              <h2 className="text-2xl font-bold mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedSlug) => {
                  const related = blogPostsData[relatedSlug];
                  return (
                    <Link
                      key={relatedSlug}
                      to={`/blog/${relatedSlug}`}
                      className="glass-card-hover p-6 block group"
                    >
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {related.readTime}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
