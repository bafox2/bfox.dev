//sell me, a picture, and a blurb
import Image from "next/image";
import photo from "../public/photo.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroImage">
        <Image
          src={photo}
          alt="Picture of the author"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <div className="heroContent">
        <h2 className="heroContentTitle">Hi, my name is Ryan</h2>
        <p className="heroContentBlurb">
        I have loved every moment of teaching. Herndon High School was home and I look back with love. From the first year, with students only 2 years younger than me, to the JV basketball squad meetings after school, then the English Language Learner technology classes where I learned so much. Herndon taught me how to be a professional. To take pride in what I bring to the world. We were lucky to have each other.
        Lately, between the schooldays, I have been brushing up on what I learned in college to push myself into development. The challenges have been different, but exhilarating. I am looking forward to pouring myself into this new career. While I am in transition, any support or connections to help me find my next home would go a long way.
        With love,
        Ben
        </p>
      </div>
    </div>
  );
}