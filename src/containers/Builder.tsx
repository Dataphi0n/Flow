import React from 'react';
import { Grid } from '@material-ui/core';
import { useEditor } from "@craftjs/core";
import { GridWrapper } from './styles'
import lz from "lzutf8";
import axios from 'axios';
import { constants } from '../constants';

const Builder = (props: any) => {
  const urlParams = new URLSearchParams(window.location.search);
  const nodeid = urlParams.get('id');
  const [layeraccordion, setLayeraccordion]: any = React.useState(false)
  const [customaccordion, setCustomaccordion]: any = React.useState(false)
  const { enabled, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div style={{ overflowX: "hidden" }}>
      <GridWrapper container spacing={0}>
        {enabled ? (
          <Grid item xs={2}>
            {/* <Toolbox {...props} /> */}
          </Grid>
        ) : null}
        <Grid style={{ height: "100vh" }} item xs={enabled ? 7 : 12}>
          {/* <ViewPort {...props} /> */}
        </Grid>
        {enabled ? (
          <Grid item xs={3}>
            {/* <SettingsPanel {...props} layeraccordion={layeraccordion} setlayeraccordion={setLayeraccordion} customaccordion={customaccordion} setcustomaccordion={setCustomaccordion} /> */}
          </Grid>
        ) : null}
      </GridWrapper>
    </div>
  );
}

export default Builder
