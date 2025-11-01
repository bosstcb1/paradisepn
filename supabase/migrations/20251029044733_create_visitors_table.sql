/*
  # Create visitors table for Pique-nique paradisiaque 2026

  1. New Tables
    - `visitors`
      - `id` (uuid, primary key)
      - `nom` (text, last name)
      - `prenoms` (text, first names)
      - `whatsapp` (text, phone number)
      - `email` (text, email address)
      - `temoignage` (text, testimonial/message)
      - `created_at` (timestamptz, registration date)
      - `language` (text, preferred language)

  2. Security
    - Enable RLS on `visitors` table
    - Add policy for inserting visitor data (public access for form submissions)
    - Add policy for admin to read all visitor data (authenticated users only)

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  prenoms text NOT NULL,
  whatsapp text NOT NULL,
  email text NOT NULL,
  temoignage text DEFAULT '',
  language text DEFAULT 'fr',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert visitor data (for form submissions)
CREATE POLICY "Anyone can register as visitor"
  ON visitors
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to read all visitor data
CREATE POLICY "Authenticated users can read all visitors"
  ON visitors
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_visitors_email ON visitors(email);
CREATE INDEX IF NOT EXISTS idx_visitors_created_at ON visitors(created_at DESC);