package com.directi.train.DiCon.services;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created with IntelliJ IDEA.
 * User: niteeshk
 * Date: 3/8/12
 * Time: 8:20 PM
 * To change this template use File | Settings | File Templates.
 */
public class ImageHandler {


    public byte[] resizeImage(byte[] pImageData, String fileExtension ,int pMaxWidth) throws IOException {
        BufferedImage bufimg = null;
        BufferedImage resized = null;
        ByteArrayOutputStream bytestream = null;
        BufferedOutputStream bos = null;
        FileOutputStream fos = null;
        double maxLargeImageSize = pMaxWidth;

        try {

            ImageIcon imageIcon = new ImageIcon(pImageData);
            Image inImage = imageIcon.getImage();

            //check size of image
            int img_width = inImage.getWidth(null);
            int img_height = inImage.getHeight(null);



                double scale = (double)maxLargeImageSize/(double)img_width;

                    int scaledW = (int) (scale * inImage.getWidth(null));
                    int scaledH = (int) (scale * inImage.getHeight(null));


                    BufferedImage outImage = new BufferedImage(scaledW, scaledH, BufferedImage.TYPE_INT_RGB);
                    AffineTransform tx = new AffineTransform();

                    if (scale < 1.0d) {
                        tx.scale(scale, scale);
                    }

                    Graphics2D g2d = outImage.createGraphics();
                    g2d.drawImage(inImage, tx, null);
                    g2d.dispose();


                    ByteArrayOutputStream baos = new ByteArrayOutputStream();



                    //W R I T E image to BufferedOutputStream and ByteArrayOutputStream
                if(fileExtension.equals("png"))
                    ImageIO.write(outImage,"png",baos);

               else if(fileExtension.equals("jpg"))
                    ImageIO.write(outImage,"jpg",baos);

               else if(fileExtension.equals("jpeg"))
                    ImageIO.write(outImage,"jpeg",baos);

               else if(fileExtension.equals("gif"))
                    ImageIO.write(outImage,"gif",baos);

               else if(fileExtension.equals("bmp"))
                    ImageIO.write(outImage,"bmp",baos);

               else
                    throw new InvalidImageFormat();


                    byte[] bytesOut = baos.toByteArray();
                    System.out.println("before scaling = "+pImageData.length);
                    System.out.println("after scaling = "+bytesOut.length);
                    return bytesOut;


        }//try
        catch(Exception e) {

            e.printStackTrace();
            return pImageData;

        }

        finally {
            if (bytestream != null) try { bytestream.close(); } catch (IOException logOrIgnore) {}
            if (bos != null) try { bos.close(); } catch (IOException logOrIgnore) {}
            if (fos != null) try { fos.close(); } catch (IOException logOrIgnore) {}
        }



    }//addPhoto

    public class InvalidImageFormat extends RuntimeException{

    }

}
