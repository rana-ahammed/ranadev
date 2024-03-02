'use client';
import React, { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

interface IProps {
  slug: string;
}

const ViewCounter = ({ slug }: IProps) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });
        if (error)
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count',
          error
        );
      }
    };

    incrementView();
  }, [slug]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single();

        if (error)
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count',
          error
        );
      }
    };

    getViews();
  }, [slug]);

  return <div>{views} views</div>;
};

export default ViewCounter;
