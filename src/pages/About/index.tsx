import React from 'react';

import { Panel } from 'primereact/panel';

// Components
import Layout from '../../components/Layout';

const About: React.SFC = () => {
  return (
    <Layout>
      <div className="p-col-12 content">
        <h1 style={{ color: 'rgba(255,255,255,0.6)' }}>Sobre nós</h1>
        <Panel header="Nossa história" toggleable>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellat deserunt eius! Fugit rerum quo ab quis. Ratione, nam!
            Magnam, dolorem. Nobis nemo unde fugit. Illo nam neque odio
            possimus?
          </span>
        </Panel>
        <Panel header="Áreas de atuação" toggleable>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellat deserunt eius! Fugit rerum quo ab quis. Ratione, nam!
            Magnam, dolorem. Nobis nemo unde fugit. Illo nam neque odio
            possimus?
          </span>
        </Panel>
        <Panel header="Missão " toggleable>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellat deserunt eius! Fugit rerum quo ab quis. Ratione, nam!
            Magnam, dolorem. Nobis nemo unde fugit. Illo nam neque odio
            possimus?
          </span>
        </Panel>
      </div>
    </Layout>
  );
};

export default About;
