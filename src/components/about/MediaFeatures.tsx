import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const MediaFeatures = () => {
  return <section className="section-padding bg-shazmeen-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Media Appearances</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Shazmeen Bank has been featured on numerous television shows, radio programs, and media outlets,
            sharing insights on personal growth, relationships, and mindset transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-premium transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-shazmeen-dark mb-4">Television & Radio</h3>
              <p className="text-gray-700 mb-4">
                Shazmeen has been a regular guest and host on numerous shows, providing expert insights
                on relationships, personal development, and mindset transformation.
              </p>
              <p className="text-shazmeen-red font-medium">
                Featured on: NTV, KTN, Citizen TV, K24, BBC, Radio Africa Group
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-premium transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-shazmeen-dark mb-4">Speaking Engagements</h3>
              <p className="text-gray-700 mb-4">
                From intimate workshops to large conferences, Shazmeen has spoken to audiences across
                Kenya and internationally about personal growth and transformation.
              </p>
              <p className="text-shazmeen-red font-medium">
                Notable events: Engage Talks, Corporate Leadership Seminars, University Lectures
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button className="btn-primary">Watch Media Appearances</Button>
        </div>
      </div>
    </section>;
};
export default MediaFeatures;