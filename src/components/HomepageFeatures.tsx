/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from "clsx";
import React from "react";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: "/img/undraw_chat_bot_re_e2gj.svg",
    description: (
      <>
        Dynamica was specifically designed to use Discord&apos;s new Slash
        Commands, it can&apos;t get any easier.
      </>
    ),
  },
  {
    title: "Easy Management",
    image: "/img/undraw_conference_call_b0w6.svg",
    description: (
      <>
        All you need is one role to allow anyone in the server to use Dynamica
        with ease.
      </>
    ),
  },
  {
    title: "Great Documentation",
    image: "/img/undraw_documents_re_isxv.svg",
    description: (
      <>
        Documentation that's updated with the bot, documenting all the commands
        and how you can use the bot to it's full potential.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          alt={title}
          src={image}
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
