import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <h1>A place for you to do some good!</h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet
        alias natus eaque, illo cum, minus facilis porro voluptates optio nam
        dolorem excepturi esse minima quaerat? Dignissimos dolorum voluptatibus
        molestias non, temporibus at. Assumenda similique rerum accusantium at
        eveniet consectetur, nobis cupiditate, aut ipsa rem officia repudiandae
        minus nulla beatae quasi, quia unde nam officiis excepturi obcaecati
        repellat impedit sapiente? Natus, nulla earum voluptas cupiditate nisi
        in excepturi! Neque deserunt quisquam, dolorum quasi velit,
        consequuntur, hic natus placeat magni commodi consectetur quidem. Quam
        voluptatem adipisci pariatur ex nobis distinctio? Nam dolores incidunt
        dolor earum nesciunt, laboriosam sunt tempore expedita aliquam. Possimus
        earum delectus enim dolor officiis reiciendis omnis ipsam, accusantium
        hic aut cumque saepe eos, repellat assumenda amet neque necessitatibus
        repellendus architecto illum tempore perspiciatis aliquam fuga? Eaque
        non natus consequuntur quod cumque ipsum perferendis, optio repellendus,
        fuga quia maiores, aliquam veritatis porro quam a ratione! Cupiditate
        praesentium laborum aut placeat dignissimos adipisci quod voluptatem
        dolore molestiae maiores voluptatibus harum iure, debitis ea inventore
        amet. Quam id provident tempora sint, natus voluptatibus? Sint, quam
        tempora nihil tempore aspernatur nemo maxime magnam cumque facere error
        quia dolor amet nostrum ipsa laudantium fuga quod reprehenderit
        voluptates doloribus. Doloribus, iure debitis! Quae doloremque quidem
        laudantium beatae, suscipit quam accusantium assumenda, aliquid id
        voluptates consequatur quo ad alias voluptate. Facilis magni alias aut
        quasi autem molestiae excepturi, itaque dignissimos blanditiis nisi
        totam? Modi veritatis, corrupti dolore adipisci fugiat deleniti expedita
        itaque voluptatibus, repudiandae, voluptas necessitatibus animi
        possimus?
      </article>
      <form className="start" onSubmit={(e) => e.preventDefault()}>
        <button>
          <a href="/fundraisers" className="start">
            <b> START FUNDING</b>
          </a>
        </button>
      </form>
    </div>
  );
};

export default Home;
