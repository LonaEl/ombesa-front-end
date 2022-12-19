import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  media: {
    height: 100,
    paddingTop: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  overlay3: {
    background: ' rgba(49,49,49,0.8)',
  },
  modalcontent: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    lineHeight : '1.4',
    background: '#f1f1f1',
    padding: '14px 28px',
    borderRadius: '3px',
    maxWidth: '600px',
    minWidth: '300px',
  },
/*   modal: {
    width: '100vw',
    height: '100vh',
    top:'0',
    left: '0',
    right:'0',
    bottom: '0',
    position: 'absolute',
  }, */
  closemodal: {
    position: 'relative',
    top: '5px',
    right: '10px',
    padding: '5px',
  },
  body2: {
    '&.active-modal': {
      overflowY: 'hidden',
    },
  },

});
export default useStyles;