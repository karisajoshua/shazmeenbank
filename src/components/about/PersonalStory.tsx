
import React from "react";

const PersonalStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-shazmeen-dark mb-6 heading-elegant">Hey Friend,</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Thank you for taking the time out to drop in and learn more about me.
              </p>
              <p>
                My name is Shazmeen Hussein Bank. My first name means queen of land. My second name is after a great man, who stood against oppression and suppression for humanity. And my last name is so you may learn to bank on and trust me.
              </p>
              <p>
                What would be typical is for me to write a long list of accolades in order for you to be impressed by me, follow or even reach out for my services.
              </p>
              <p>
                But I want you to get to know me. The real me. Not all my accomplishments. My certificates will not inspire you, but my hope is that my journey and who I am, will do so.
              </p>
              <p className="text-shazmeen-red font-serif italic text-xl">
                "Helping those that feel oppressed by others or even themselves, find freedom within, is my life's mission."
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <img 
              src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeenBank1.jpg" 
              alt="Shazmeen Bank" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-premium">
            <img 
              src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeenBank2.jpg" 
              alt="Shazmeen Bank" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="space-y-4 text-gray-700">
              <p>
                I grew up in Nairobi, Kenya and I have been blessed to have spent the last 10 years in this field of self help and growth. It has taught and humbled me about how I look at life.
              </p>
              <p>
                I have had the privilege to travel, grow and learn from the best in the industry. I have spent millions on training and courses, just so I could have the best knowledge at my fingertips, in order to better serve those around me.
              </p>
              <p>
                My journey to helping those around me began when I was 18 years old and faced with my first decision - to have my son or abort him and go about living the life I had envisioned as a teenager. I chose to have my son, against all odds and got married within a week. To learn how the journey went, I ask you to watch my engage talk.
              </p>
              <p className="text-shazmeen-red font-serif italic text-xl">
                "With a little courage and faith, your destiny awaits."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-4 text-gray-700">
              <p>
                But my direction of being a property developing executive, came to an end when I realised I was in deep pain and depression and the traditional ways of therapy and counselling were not helping me at all.
              </p>
              <p>
                I remember laying in bed one night, crying, saying to myself there must be so many people out there also hurting, feeling lost and wanting so much more from life. I was inspired in my pain to seek the deeper meaning about what I had grown through. I knew that my story was so much more powerful than I was making it, and I had to find a way to heal. To re-discover myself.
              </p>
              <p>
                And so the first step was taken when I enrolled in a course to help myself. But I was not proud of my certification. I was proud that I got myself out of deep depression and onto a path that made me excited to wake up again.
              </p>
              <p>
                But covid awakened a new bloom inside of me. I realised that I wanted to help so many more people than the ones that could afford it, and so I began on Radio, and the TV and then worked it up to a podcast and then got my own shows.
              </p>
              <p>
                I was moved so deeply by how much people want to grow, heal and just need someone to listen to them. And this has now changed the course of what I want to do. I have spent the last year teaching absolutely for free. Helping as many people as i can absolutely for free. This is where I have found my fulfillment. Inspiring those that felt so unseen and hidden. To show them they deserve to shine and grow and attain all their heart desires.
              </p>
              <p>
                So this is me, right now at least, as of September 2021. I know our paths will cross and, may, I inspire you, just as you will me.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <img 
              src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeenBank3.jpg" 
              alt="Shazmeen Bank" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
